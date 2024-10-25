const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const winSound = document.getElementById("win-sound")
const tieSound = document.getElementById("tie-sound")
const loseSound = document.getElementById("lose-sound")


const choices = ["Rock", "Paper", "Scissor"];
let playerScore = 0;
let computerScore = 0;

function Game(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    //Ternary operator

    const getResult = (playerChoice, computerChoice) => playerChoice === computerChoice ? "IT'S A TIE!😕" : (playerChoice === "Rock" && computerChoice === "Scissor") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissor" && computerChoice === "Paper") ? "YOU WIN!😊" : "YOU LOSE!😭";

    const result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    resultDisplay.style.backgroundColor =
        result === "IT'S A TIE!😕" ? "blue"
            : result === "YOU WIN!😊" ? "green" : "red";
    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";

    if (result === "YOU WIN!😊") {
        playerScore++;
        winSound.currentTime = 0;
        winSound.play();
    }
    else if (result === "YOU LOSE!😭") {
        computerScore++;
        loseSound.currentTime = 0;
        loseSound.play();
    }
    else {
        tieSound.currentTime = 0;
        tieSound.play();
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

}