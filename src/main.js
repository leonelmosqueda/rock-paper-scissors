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

    const roundResult = checkRoundWinner(playerSelection, computerSelection);
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

function checkRoundWinner (playerSelection, computerSelection) {
    const MESSAGE_WIN = "You Win This Round!"
    const MESSAGE_LOSE = "You Lose This Round!"

    if (playerSelection === computerSelection) {
        return "This round is a tie!"
    } else if (playerSelection === CHOICES[0]) {
        return computerSelection === CHOICES[1] ? `${MESSAGE_LOSE} ${computerSelection} beats ${playerSelection}` : `${MESSAGE_WIN} ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === CHOICES[1]) {
        return computerSelection === CHOICES[0] ? `${MESSAGE_WIN} ${playerSelection} beats ${computerSelection}` : `${MESSAGE_LOSE} ${computerSelection} beats ${playerSelection}`
    } else {
        return computerSelection === CHOICES[0] ? `${MESSAGE_LOSE} ${computerSelection} beats ${playerSelection}` : `${MESSAGE_WIN} ${playerSelection} beats ${computerSelection}`
    }
}

playRound();