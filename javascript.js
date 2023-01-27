//Function to create a random whole number between for 1-3
function computerChoose() {
    const numberToChoice = Math.floor(Math.random() * 3) + 1;
    //console.log(numberToChoice);

    if (numberToChoice == 1) {
        return "rock";
    }
    else if (numberToChoice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//console.log(computerChoose());

function playRound(playerChoice, computerChoice) {

    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice == computerChoice) {
        console.log("It's a tie!");
    }
    else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose!");
        }
        else {
            console.log("You win!");
        }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose!");
        }
        else {
            console.log("You win!");
        }
    }
    else {
        if (computerChoice == "rock") {
            console.log("You lose!")
        }
        else {
            console.log("You win!")
        }
    }
}

playRound(prompt("Alright, pick a stance! Rock, paper, or scissors?"), computerChoose());