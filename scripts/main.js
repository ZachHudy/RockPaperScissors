function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let winLose = '';
    let winner = '';
    let loser = '';
    let ps = playerSelection.toLowerCase();
    let result = ps+computerSelection;
    switch (result) {
        case 'rockrock':
            winLose = 'It\'s a tie!';
            break;
        case 'rockpaper':
            winLose = 'Sorry, you lose.';
            break;
        case 'rockscissors':
            winLose = 'You win!';
            break;
    }

    return `${winLose} `
    
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));