const CHOICES = ["rock", "paper", "scissors"];
const $btnChoices = document.querySelectorAll('.choices button');
const $btnStart = document.querySelector('#start-game');
let round = 0;

let playerScore = 0;
let machineScore = 0;


$btnStart.addEventListener('click', startGame)

function startGame() {
    enableDashboard();
    disableButtonStart()
}

function enableDashboard() {
    const $dashboard = document.querySelectorAll('.choices .container-frame');

    $dashboard.forEach((option) => {option.classList.remove('disabled')});
}

function disableButtonStart () {
    const $buttonStart = document.querySelector('#start-game');

    $buttonStart.classList.add('disabled');
}


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

    checkEndOfTheGame();
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

function checkEndOfTheGame() {
    const $resultGame = document.querySelector('#result');

    if (playerScore === 5) {
        showWinMessage($resultGame);
        disabledBoard();        
    } else if (machineScore === 5) {
        showDefeatMessage($resultGame);
        disabledBoard();
    } else {
        return;
    }
}

function showWinMessage (container) {
    container.textContent = "Congratulations! You Won This Game!";
}

function showDefeatMessage (container) {
    container.textContent = "Sorry! You Lost This Game!"
}

function disabledBoard () {
    $btnChoices.forEach(btn => {
        btn.classList.add('disabled');
    })
}