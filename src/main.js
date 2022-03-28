const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

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
    return roundResult;
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
        if (computerSelection === CHOICES[1]) {
            computerScore++;
            return `${MESSAGE_LOSE} ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            return `${MESSAGE_WIN} ${playerSelection} beats ${computerSelection}`;
        }
    } else if (playerSelection === CHOICES[1]) {
        if (computerSelection === CHOICES[0]) {
            playerScore++;
            return `${MESSAGE_WIN} ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            return `${MESSAGE_LOSE} ${computerSelection} beats ${playerSelection}`;
        }
    } else {
        if (computerSelection === CHOICES[0]) {
            computerScore++
            return `${MESSAGE_LOSE} ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            return `${MESSAGE_WIN} ${playerSelection} beats ${computerSelection}`;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }

    if (playerScore > computerScore) {
        console.log(`Congratulations! You Won!`);
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("Sorry! You Lost, Try Again!");
    }
}

game();