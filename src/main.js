const CHOICES = ["rock", "paper", "scissors"];

function computerPlay () {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function userPlay() {
    const userChoice = prompt('Please, enter: "Rock", "Paper" or "Scissors".').toLowerCase().trim();
    
    if (checkChoice(userChoice)) {
        return userChoice;
    } else {
        return console.log("Enter a correct choice!");
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = userPlay();
    computerSelection = computerPlay();
}

function checkChoice(userChoice) {
    for (let i = 0; i < CHOICES.length; i++) {
        const choice = CHOICES[i];

        if (userChoice === choice) {
            return true;
        } else if (i < CHOICES.length - 1) {
            continue;
        } else {
            return false;
        }
    }
}

playRound();