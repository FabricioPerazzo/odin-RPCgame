const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) return ROCK;
    if (randNum === 1) return PAPER;
    if (randNum === 2) return SCISSORS;
}

console.log(getComputerChoice());