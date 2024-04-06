// Setting this as global so both playRound and playGame can access them
let playerWins = 0;
let computerWins = 0;

// // returns player's choice
// function getPlayerChoice() {
//     return prompt("Rock, paper, scissors!", "rock");
// }

// when called, returns PC's choice
function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3);

    if(choiceNum === 0) {
        return "Rock";
    } else if(choiceNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Plays a single round
function playRound(playerSelection, computerSelection) {
    // Standardises return values from get choice functions
    const playerVal = playerSelection.toLowerCase();
    const computerVal = computerSelection.toLowerCase();

    const container = document.querySelector("#results");

    // Setting text as a val because I'm lazy
    const playerWinText = document.createElement("p");
    playerWinText.textContent = "Player wins!";

    const computerWinText = document.createElement("p");
    computerWinText.textContent = "Computer wins!";

    const tieText = document.createElement("p");
    tieText.textContent = "It's a tie!";

    // I want to assign the values for RPS as numbers for logic used in this function. Might not be practical though

    // Function will break here if it's a tie
    if(playerVal === computerVal) {
        container.appendChild(tieText);
    }

    if(playerVal === "rock") {
        if(computerVal === "paper") {
            computerWins++;
            container.appendChild(computerWinText);
        } else if(computerVal === "scissors") {
            playerWins++;
            container.appendChild(playerWinText);
        }
    } else if(playerVal === "paper") {
        if(computerVal === "rock") {
            playerWins++;
            container.appendChild(playerWinText);
        } else if(computerVal === "scissors") {
            computerWins++;
            container.appendChild(computerWinText);
        }
    } else if(playerVal === "scissors") {
        if(computerVal === "rock") {
            computerWins++;
            container.appendChild(computerWinText);
        } else if(computerVal === "paper") {
            playerWins++;
            container.appendChild(playerWinText);
        }
    }
}

// // Plays a whole game, five rounds of RPS, and determines the winner/loser
// function playGame() {

//     for(i = 0; i < 5; i++) {
//         playRound(getPlayerChoice(), getComputerChoice());
//     }

//     if(playerWins === computerWins) {
//         console.log("The game is tied!");
//     } else if (playerWins > computerWins) {
//         console.log("Player wins the game!");
//     } else {
//         console.log("Computer wins the game!")
//     }
// }

// playGame();

const buttons = document.querySelectorAll("#button-container button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});