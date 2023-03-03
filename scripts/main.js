let wins = 0;
let losses = 0;
let ties = 0;

function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}


// Create a helper function to get the player choice
function getPlayerChoice() {
    let choices = ['rock', 'paper', 'scissors']; // Create array to hold possible choices
    let playerChoice = prompt('Please enter "rock", "paper", or "scissors".').trim(); // Have player input choice.

    while (!choices.includes(playerChoice.toLowerCase())) {
        playerChoice = prompt('Invalid choice. Please enter "rock", "paper", or "scissors".');
    }

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let winLose = ''; // String announcing if player wins or loses
    let winner = ''; // String for winning hand
    let loser = ''; // String for losing hand
    let ps = playerSelection.toLowerCase(); // correct player selection for case
    let result = ps+computerSelection; // create result for switch statement to determine outcome
    switch (result) {
        // cases with tie; return from block early
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            ties++;
            return `It's a tie!`;
        // cases with player loss
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            losses++;
            winLose = 'Sorry, you lose.';
            winner = computerSelection[0].toUpperCase() + computerSelection.slice(1);
            loser = ps;
            break;
        // cases with player win
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            winLose = 'You win!';
            wins++;
            winner = ps[0].toUpperCase() + ps.slice(1);
            loser = computerSelection;
            break;
    }

    return `${winLose} ${winner} beats ${loser}.`
    
}

// Create a new function to play a 5 round game
function game() {
    // Create a for loop
    wins = 0;
    losses = 0;
    ties = 0;
    for(let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }

}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));