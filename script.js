// when called, PC makes a choice
function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3);
    let choiceFinal;

    if(choiceNum === 0) {
        choiceFinal = "Rock";
    } else if(choiceNum === 1) {
        choiceFinal = "Paper";
    } else {
        choiceFinal = "Scissors";
    }

    console.log(choiceFinal);
    return choiceFinal;
}

function gameRound(playerSelection, computerSelection) {
    const playerVal = playerSelection.toLowerCase();
    const computerVal = computerSelection.toLowerCase();

    const playerWins = "Player wins!";
    const computerWins = "Computer wins!"

    // I want to assign the values for RPS as numbers for logic used in this function. Might not be practical though

    if(playerVal === computerVal) {
        return "It's a tie!";
    }

    if(playerVal === "rock") {
        if(computerVal === "paper") {
            return computerWins;
        } else if(computerVal === "scissors") {
            return playerWins;
        }
    } else if(playerVal === "paper") {
        if(computerVal === "rock") {
            return playerWins;
        } else if(computerVal === "scissors") {
            return computerWins;
        }
    } else if(playerVal === "scissors") {
        if(computerVal === "rock") {
            return computerWins;
        } else if(computerVal === "paper") {
            return playerWins;
        }
    }
}

let a = gameRound(prompt("Rock, paper, scissors!", ""), getComputerChoice());
console.log(a);


