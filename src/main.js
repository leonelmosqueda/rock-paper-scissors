const CHOICES = ["rock", "paper", "scissors"];
const $btnChoices = document.querySelectorAll('.choices button');
let round = 0;

let playerScore = 0;
let computerScore = 0;


$btnChoices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        game(e);
    });
});

function userPlay(e) {
    return e.target.id;
}

function computerPlay () {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound (e) {
    const playerSelection = userPlay(e)
    const machineSelection = computerPlay();

    showSelections(playerSelection, machineSelection);
    // console.log(playerSelection, machineSelection);
    // const roundResult = checkRoundWinner(playerSelection, computerSelection);
    // showRoundResult(roundResult);
    

    // return roundResult;
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

function game(e) {
    playRound(e);

    // if (playerScore > computerScore) {
    //     console.log(`Congratulations! You Won!`);
    // } else if (playerScore === computerScore) {
    //     console.log("It's a tie!");
    // } else {
    //     console.log("Sorry! You Lost, Try Again!");
    // }
}

function showSelections (playerSelection, machineSelection) {
    const $containerPlayerChoice = document.querySelector('#player-choice');
    const $containerMachineChoice = document.querySelector('#machine-choice');

    $containerPlayerChoice.textContent = playerSelection;
    $containerMachineChoice.textContent = machineSelection;
}
