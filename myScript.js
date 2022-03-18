function computerPlay() {
    choices = ['rock', 'paper', 'scissors']
    // choice is made through generating random index for array
    choice = choices[Math.floor(Math.random()*choices.length)]
    return choice
} 

// disable buttons when the game is over
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

// the main game function
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
        
        //check if the game is over 
        if (playerScore === 5) {
            disableButtons();
            result.textContent += ` You're a winner!`;
        } 
    } else {
        computerScore += 1;
        result.textContent = `You lose! ${computerSelect} beats ${playerSelect}.`;
        score.textContent = `You: ${playerScore} Computer: ${computerScore}.`;

        //check if the game is over 
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
