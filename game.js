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
    else if (playerChoice.toUpperCase() === "SCISSORS") {
        switch(computerChoice){
            case "ROCK":
                return "You lose! ROCK beats SCISSORS";
            case "PAPER":
                return "You win! SCISSORS beats PAPER";
            case "SCISSORS":
                return "It's a tie! you both chose SCISSORS";
        }
    }
    else {
        return "You entered an invalid choice";
    }
}

function getWinner(message) {
    if (message.includes("win")) return 1;
    if (message.includes("lose")) return -1;
    else return 0;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let message = playRound(prompt("Enter your choice:"), getComputerChoice());
        if (message === "You entered an invalid choice") {
            console.log(message);
            i--;
            continue;
        }
        else {
            console.log(message);
            if (getWinner(message) === 1){
                playerPoints++;
            }
            else if (getWinner(message) === -1){
                computerPoints++;
            }
        }
    }

    if (playerPoints > computerPoints) console.log(`Congratulations, you won with a score of ${playerPoints} to ${computerPoints}!`);
    else console.log(`You lose with a score of ${playerPoints} to ${computerPoints}!`);
}

//game();