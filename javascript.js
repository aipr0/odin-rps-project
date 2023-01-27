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
        return 2;
    }
    else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose!");
            return 0;
        }
        else {
            console.log("You win!");
            return 1;
        }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose!");
            return 0;
        }
        else {
            console.log("You win!");
            return 1;
        }
    }
    else {
        if (computerChoice == "rock") {
            console.log("You lose!")
            return 0;
        }
        else {
            console.log("You win!")
            return 1;
        }
    }
}

function game() {

    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let gameResult = playRound(prompt("Alright, pick a stance! Rock, paper, or scissors?"), computerChoose());
        if (gameResult == 0) {
            computerWins++;
        }
        else if (gameResult == 1) {
            playerWins++;
        }
        else {
            computerWins++;
            playerWins++;
        }
    }

    console.log(playerWins);
    console.log(computerWins);

    if (playerWins == computerWins) {
        console.log("It's a tie!");
    }
    else if (playerWins < computerWins) {
        console.log("You lose!");
    }
    else {
        console.log("A winner is you : )");
    }
}


game();

