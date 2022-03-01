function computerPlay() {
    choices = ['rock', 'paper', 'scissors']
    // choice is made through generating random index for array
    choice = choices[Math.floor(Math.random()*choices.length)]
    return choice
} 

function playRound(e) {
    console.log(e);
    computerSelect = computerPlay();
    console.log(computerSelect);
    const playerSelect = e.target.getAttribute('id');
    console.log(playerSelect);

    if (computerSelect === playerSelect) { 
        return 'Tie. Try again.' 
    } else if ((computerSelect === 'rock') && (playerSelect === 'paper')) {
        return 'You win! Paper beats rock.'
    } else if ((computerSelect === 'rock') && (playerSelect === 'scissors')) {
        return 'You lose! Rock beats scissors.'
    } else if ((computerSelect === 'paper') && (playerSelect === 'rock')) {
        return 'You lose! Paper beats rock.'
    } else if ((computerSelect === 'paper') && (playerSelect === 'scissors')) {
        return 'You win! Scissors beats paper.'
    } else if ((computerSelect === 'scissors') && (playerSelect === 'rock')) {
        return 'You win! Rock beats scissors.'
    } else if ((computerSelect === 'scissors') && (playerSelect === 'paper')) {
        return 'You lose! Scissors beats paper.'
    } else {
        return 'Please provide valid input.'
    }
} 

const buttons = Array.from(document.querySelectorAll('button')); 
buttons.forEach(button => button.addEventListener('click', playRound));




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