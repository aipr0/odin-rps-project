//Function to create a random whole number between for 1-3, uses that number to determine the string value for the computer to play RPS
function computerChoose() {
    const numberToChoice = Math.floor(Math.random() * 3) + 1;

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

//Plays a single round of RPS
function playRound(playerChoice, computerChoice) {

    //This will display who picked what choice
    resultsDiv.textContent += (`${playerChoice}\n`);
    resultsDiv.textContent += (`${computerChoice}\n`);

    //First if statement clears up the tie issue, the rest is the process of eliminating the other possibilities to evaluate
    //The return values are used in game()'s main for loop to divy out the win tallies
    //I used numbers instead of true/false because I wanted to tally the ties as a point for both the player and the computer
    //So 0 is a computer win, 1 is a player win, 2 is a tie
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

//Where the magic happens - playRound() gets looped five times and uses the return value to tally the wins, then decides the overall winner
function game() {

    //Declared variables for the player and computer win tallies so they can be incremented in the loop
    let playerWins = 0;
    let computerWins = 0;

    //The main loop, iterates five times
    for (let i = 0; i < 5; i++) {
        //gamResult calls the playRound() function and assigns the return value to itself
        let gameResult = playRound(prompt("Alright, pick a stance! Rock, paper, or scissors?"), computerChoose());

        //Using gameResult, the return value from each round played, to determine who deserves a point and adds that point
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


    //Just prints out the total tally for both players
    console.log(playerWins);
    console.log(computerWins);

    //Evaluates the tallies, determines the winner
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

//Creates buttons to select choice and appends them to the page body
const selectRock = document.createElement('button');
const selectPaper = document.createElement('button');
const selectScissors = document.createElement('button');

selectRock.textContent = "Rock";
selectPaper.textContent = "Paper";
selectScissors.textContent = "Scissors";

document.body.appendChild(selectRock);
document.body.appendChild(selectPaper);
document.body.appendChild(selectScissors);

//Div to seperate display of ongoing results of game
const resultsDiv = document.createElement('div');
document.body.appendChild(resultsDiv);

//Second parameter must be a function, I had to use an arrow function since playRound calls a function itself. Weird order of things, I don't know exactly
selectRock.addEventListener('click', () => playRound("rock", computerChoose()));
selectPaper.addEventListener('click', () => playRound("paper", computerChoose()));
selectScissors.addEventListener('click', () => playRound("scissors", computerChoose()));




//Simply calls the main game function
//game();

