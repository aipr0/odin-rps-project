// Setting this as global so both playRound and playGame can access them
let playerWins = 0;
let computerWins = 0;

// returns player's choice
function getPlayerChoice() {
    return prompt("Rock, paper, scissors!", "");
}

// when called, returns PC's choice
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

    return choiceFinal;
}

// Plays a single round
function playRound(playerSelection, computerSelection) {
    // Standardises return values from get choice functions
    const playerVal = playerSelection.toLowerCase();
    const computerVal = computerSelection.toLowerCase();

    // Setting text as a val because I'm lazy
    const playerWinText = "Player wins!";
    const computerWinText = "Computer wins!"

    // I want to assign the values for RPS as numbers for logic used in this function. Might not be practical though

    // Function will break here if it's a tie
    if(playerVal === computerVal) {
        return "It's a tie!";
    }

    if(playerVal === "rock") {
        if(computerVal === "paper") {
            computerWins++;
            return computerWinText;
        } else if(computerVal === "scissors") {
            playerWins++;
            return playerWinText;
        }
    } else if(playerVal === "paper") {
        if(computerVal === "rock") {
            playerWins++;
            return playerWinText;
        } else if(computerVal === "scissors") {
            computerWins++;
            return computerWinText;
        }
    } else if(playerVal === "scissors") {
        if(computerVal === "rock") {
            computerWins++;
            return computerWinText;
        } else if(computerVal === "paper") {
            playerWins++;
            return playerWinText;
        }
    }
}

// Plays a whole game, five rounds of RPS, and determines the winner/loser
function playGame() {

    for(i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }

    if(playerWins === computerWins) {
        console.log("It's a tie!");
    } else if (playerWins > computerWins) {
        console.log("Player wins the game!");
    } else {
        console.log("Computer wins the game!")
    }
}

playGame();