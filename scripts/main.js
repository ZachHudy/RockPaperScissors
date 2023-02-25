function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let winLose = '';
    let ps = playerSelection.toLowerCase();
    let result = ps+computerSelection;
    switch (result) {
        case 'rockrock':
            winLose = 'Tie';
            break;
        case 'rockpaper':
            winLose = 'Lose';
            break;
        case 'rockscissors':
            winLose = 'Win';
            break;
    }

    return `You ${winLose}.`
    
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));