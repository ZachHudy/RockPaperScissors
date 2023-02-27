function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
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
            return `It's a tie!`;
        // cases with player loss
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            winLose = 'Sorry, you lose.';
            break;
        // cases with player win
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            winLose = 'You win!';
            break;
    }

    return `${winLose} `
    
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));