const CHOICES = ["rock", "paper", "scissors"];
const $btnChoices = document.querySelectorAll('.choices button');
let round = 0;

let playerScore = 0;
let machineScore = 0;


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

    const roundResult = checkRoundWinner(playerSelection, machineSelection);
    updateScore(roundResult);
    showResultRound(roundResult);

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
    const MESSAGE_WIN = "You Win This Round!";
    const MESSAGE_LOSE = "You Lose This Round!";
    const MESSAGE_TIE = "It's a Tie";

    if (playerSelection === computerSelection) {
        return MESSAGE_TIE;
    } else if (playerSelection === CHOICES[0]) {
        if (computerSelection === CHOICES[1]) {
            return MESSAGE_LOSE;
        } else {
            return MESSAGE_WIN;
        }
    } else if (playerSelection === CHOICES[1]) {
        if (computerSelection === CHOICES[0]) {
            return MESSAGE_WIN;
        } else {
            return MESSAGE_LOSE;
        }
    } else {
        if (computerSelection === CHOICES[0]) {
            return MESSAGE_LOSE;
        } else {
            return MESSAGE_WIN;
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

function updateScore(roundResult) {
    const $playerScore = document.querySelector('#player-score');
    const $machineScore = document.querySelector('#machine-score');

    if (roundResult === "You Win This Round!") {
        playerScore++;
        $playerScore.textContent = playerScore.toString().padStart(2, '0');
    } else if (roundResult === "You Lose This Round!") {
        machineScore++;
        $machineScore.textContent = machineScore.toString().padStart(2, '0');
    } else {
        return;
    }
}

function showResultRound (result) {
    const $resultRound = document.querySelector("#result");

    $resultRound.textContent = result;
}
