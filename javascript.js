//Function to create a random whole number between for 1-3
function computerChoice() {
    const numberToChoice = Math.floor(Math.random() * 3) + 1;
    console.log(numberToChoice);

    if (numberToChoice == 1) {
        return "Rock";
    }
    else if (numberToChoice == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(computerChoice());

function playRound(playerChoice, computerChoice) {


}
