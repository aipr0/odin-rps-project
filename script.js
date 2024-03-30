// when called, PC makes a choice
function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3);
    let choiceFinal;
    console.log(choiceNum);

    if(choiceNum === 0) {
        choiceFinal = "Rock";
    } else if(choiceNum === 1) {
        choiceFinal = "Paper";
    } else {
        choiceFinal = "Scissors";
    }

    return choiceFinal;
}

console.log(getComputerChoice());