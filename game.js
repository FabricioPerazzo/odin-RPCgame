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
                return"It's a tie! you both chose SCISSORS";
        }
    }
}

console.log(playRound("paper", getComputerChoice()));