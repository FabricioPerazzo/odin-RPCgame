const playerPointsDiv = document.querySelector("#numPlayer");
const computerPointsDiv = document.querySelector("#numComputer");
const resultMessageDiv = document.querySelector(".turnResult");

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) return "ROCK";
    if (randNum === 1) return "PAPER";
    if (randNum === 2) return "SCISSORS";
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toUpperCase() === "ROCK") {
        switch(computerChoice){
            case "ROCK":
                return "It's a tie! you both chose ROCK";
            case "PAPER":
                return "You lose! PAPER beats ROCK";
            case "SCISSORS":
                return"You win! ROCK beats SCISSORS";
        }
    }
    else if (playerChoice.toUpperCase() === "PAPER") {
        switch(computerChoice){
            case "ROCK":
                return "You win! PAPER beats ROCK";
            case "PAPER":
                return "It's a tie! you both chose PAPER";
            case "SCISSORS":
                return"You lose! SCISSORS beats PAPER";
        }
    }
    else {
        switch(computerChoice){
            case "ROCK":
                return "You lose! ROCK beats SCISSORS";
            case "PAPER":
                return "You win! SCISSORS beats PAPER";
            case "SCISSORS":
                return "It's a tie! you both chose SCISSORS";
        }
    }
}

function getWinner(message) {
    if (message.includes("win")) return 1;
    if (message.includes("lose")) return -1;
    else return 0;
}

function game(result) {
    let roundResult_ = getWinner(result);
    let score;

    if (roundResult_ === 1){
        score = parseInt(playerPointsDiv.textContent) + 1;
        playerPointsDiv.textContent = score;
        resultMessageDiv.textContent = result;
    }
    else if (roundResult_ === -1){
        score = parseInt(computerPointsDiv.textContent) + 1;
        computerPointsDiv.textContent = score;
        resultMessageDiv.textContent = result;
    }
    else {
        resultMessageDiv.textContent = result;
    }
}

function chekEndGame(playerPoints, computerPoints) {
    if (playerPoints === 5) {
        resultMessageDiv.textContent = `Congratulations, you won with a score of ${playerPoints} to ${computerPoints}!`;
        playerPointsDiv.textContent = 0;
        computerPointsDiv.textContent = 0;
    }
    else if (computerPoints === 5) {
        resultMessageDiv.textContent = `You lose with a score of ${playerPoints} to ${computerPoints}!`;
        computerPointsDiv.textContent = 0;
        playerPointsDiv.textContent = 0;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice;
        let buttonID = button.id;

        if (buttonID === "button-rock") playerChoice = "ROCK";
        else if (buttonID === "button-paper") playerChoice = "PAPER";
        else playerChoice = "SCISSORS";

        let roundResult = playRound(playerChoice, getComputerChoice());
        game(roundResult);

        let playerPoints = parseInt(playerPointsDiv.textContent);
        let computerPoints = parseInt(computerPointsDiv.textContent);
        chekEndGame(playerPoints, computerPoints);
    })
});