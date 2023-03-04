//Global values I'm using to tally scores, global because functions inside event listeners don't return anything aside the code they execute
//So I needed global scope variables to iterate score
let totalRoundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;

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

    totalRoundsPlayed++;
    //This will display who picked what choice
    resultsDiv.textContent += (`Player picked: ${playerChoice}\n`);
    resultsDiv.textContent += (`Your nemesis chose: ${computerChoice}\n`);

    //First if statement clears up the tie issue, the rest is the process of eliminating the other possibilities to evaluate
    //Tieing is a tally for both because everyone's a winner
    if (playerChoice == computerChoice) {
        console.log("It's a tie!");
        playerWins++;
        computerWins++;
        return;
    }
    else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose!");
            computerWins++;
            return;
        }
        else {
            console.log("You win!");
            playerWins++;
            return;
        }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose!");
            computerWins++;
            return;
        }
        else {
            console.log("You win!");
            playerWins++;
            return;
        }
    }
    else {
        if (computerChoice == "rock") {
            console.log("You lose!")
            computerWins++;
            return;
        }
        else {
            console.log("You win!")
            playerWins++;
            return;
        }
    }
}

//My roundabout way of testing that the rounds of RPS played is no more than five
function testBeforePlay(choice) {
    if (totalRoundsPlayed < 5) {
        return playRound(choice, computerChoose());
    }
    else {
        resultsDiv.textContent += "It's over!\n";
        
        if (playerWins == computerWins) {
            resultsDiv.textContent += "It's a tie!";
        }
        else if (playerWins < computerWins) {
            resultsDiv.textContent += "You lose!";
        }
        else {
            resultsDiv.textContent += "A winner is you : )";
        }
    }

    selectRock.removeEventListener('click', namedCallBack);
    selectPaper.removeEventListener('click', namedCallBack);
    selectScissors.removeEventListener('click', namedCallBack);
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

function namedCallBack(e) {
    testBeforePlay(e.target.textContent);
}

//Second parameter must be a function, I had to use an arrow function since playRound calls a function itself. Weird order of things, I don't know exactly
selectRock.addEventListener('click', namedCallBack);
selectPaper.addEventListener('click', namedCallBack);
selectScissors.addEventListener('click', namedCallBack);