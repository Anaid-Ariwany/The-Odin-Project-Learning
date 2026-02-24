//initiliaze the score variables
let humanScore = 0;
let computerScore = 0;

//create an event listener for the buttons that returns the user's choice
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        /* console.log(humanChoice); */
        playRound(humanChoice);
    });
});
/* console.log(buttons); */

// create a function to randomly get the computer's choice
function getComputerChoice() {
    //get a random number between 1 and 3
    const min = 1;
    const max = 3;
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
/* console.log(getComputerChoice()); */


//create a function that plays a round of rock paper scissors and updates the score. If the human/computer gets to the score of 5 first, stop the game, declare a winner, and reset the scores to 0.
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const resultsDisplay = document.getElementById("resultsDisplay");

    const winnerDisplay = document.getElementById("winnerDisplay");

    winnerDisplay.textContent = "";

    //human wins
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        ++humanScore;

        resultsDisplay.textContent = `You win! \n\n${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`;
    }

    else if (humanChoice === computerChoice) {
        resultsDisplay.textContent = `It's a tie! \n\nYou both chose ${humanChoice.toUpperCase()}. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`;
    }

    else {
        ++computerScore;
        resultsDisplay.textContent = `You lose! \n\n${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`;
    }


    if (humanScore === 5) {
        winnerDisplay.textContent = "Congratulations! You won the game!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        winnerDisplay.textContent = "Sorry, you lost the game. Better luck next time!";
        humanScore = 0;
        computerScore = 0;
    }

}


