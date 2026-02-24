//initialize the score variables
let humanScore = 0;
let computerScore = 0;

// create a function to randomly get the computer's choice
function getComputerChoice() {
    //get a random number between 1 and 3
    const min = 1;
    const max = 3;
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

    //assign the computerChoice to rock, paper, or scissors
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
/* alert(getComputerChoice()); */


//create a function that takes the user's choice and returns it
function getHumanChoice() {
    const humanChoice = prompt("Choose: rock, paper, or scissors? ").toLowerCase();
    return humanChoice;
}
/* console.log(getHumanChoice());; */


//create a function that plays a round of rock paper scissors and updates the score
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    //human wins
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        ++humanScore;
        alert(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${humanScore} Computer score: ${computerScore}`);
    } else if (humanChoice == computerChoice) {
        alert(`It's a tie! You both chose ${humanChoice}. Your score: ${humanScore} Computer score: ${computerScore}`);
    } else {
        ++computerScore;
        alert(`You lose! ${computerChoice} beats ${humanChoice}. Your score: ${humanScore} Computer score: ${computerScore}`);

    }

}
/* alert(playRound()); */

//create a function that plays 5 rounds of rock paper scissors and declares a winner at the end
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    //declare a winner at the end of 5 rounds
    if (humanScore > computerScore) {
        alert(`Congratulations! You win the game! Final score: You: ${humanScore} - Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`Sorry, you lose the game. Final score: You: ${humanScore} - Computer: ${computerScore}`);
    } else {
        alert(`It's a tie! Final score: You: ${humanScore} - Computer: ${computerScore}`);
    }
}
game();

