function computerPlay() {
    choices = ['rock', 'paper', 'scissors']
    // choice is made through generating random index for array
    choice = choices[Math.floor(Math.random()*choices.length)]
    return choice
} 

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

function playRound(e) {
    let computerSelect = computerPlay();
    let playerSelect = e.target.getAttribute('id');
    
    if (computerSelect === playerSelect) { 
        result.textContent = `Tie. You both chose ${computerSelect}.`;
        score.textContent = `You: ${playerScore} Computer: ${computerScore}.`;
        return; 
    } else if ((computerSelect === 'rock' && playerSelect === 'paper') || 
    (computerSelect === 'scissors' && playerSelect === 'rock') || 
    (computerSelect === 'paper' && playerSelect === 'scissors')) {
        playerScore += 1;
        result.textContent = `You win! ${playerSelect} beats ${computerSelect}.`;
        score.textContent = `You: ${playerScore} Computer: ${computerScore}.`;
        if (playerScore === 5) {
            disableButtons();
            result.textContent += ` You're a winner!`;
        } 
    } else {
        computerScore += 1;
        result.textContent = `You lose! ${computerSelect} beats ${playerSelect}.`;
        score.textContent = `You: ${playerScore} Computer: ${computerScore}.`;
        if (computerScore === 5) {
            disableButtons();
            result.textContent += ` Computer won!`;
            score.textContent = `You: ${playerScore} Computer: ${computerScore}.`;
        } 
    }
} 

const score = document.querySelector('.score'); 
const result = document.querySelector('.result');
let playerScore = 0;
let computerScore = 0;
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));


/* Doesn't work...

if (playerScore === 5) {
    buttons.removeEventListener('click', playRound);
    alert('you win');
} else if (computerScore === 5) {
    buttons.removeEventListener('click', playRound);
    alert('you lose');
}
/*
while (!(playerScore === 5) || !(computerScore === 5)) { 
    switch(roundResult) {
        case true:
            playerScore += 1;
            break;
        case false:
            computerScore += 1;
            break;
    }
}



/*
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

function game() {

    playerWins = 0;
    computerWins = 0;

    for (let i = 0; i < 5; i++) {

        const computerSelect = computerPlay();
        const playerSelect = (prompt('Choose rock/paper/scissors: ')).toLowerCase();
        result = playRound(computerSelect, playerSelect);
        console.log(result);

        if (result.includes('You win!')) {
            playerWins += 1;
        } else if (result.includes('You lose!')) {
            computerWins += 1;
        } else {
            i--;
        }
    }

    if (playerWins > computerWins) {
        return 'Congratulations! You\'re a winner!';
    } else {
        return 'Game over. Computer wins.'
    }
}

*/