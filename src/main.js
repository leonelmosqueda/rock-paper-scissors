const CHOICES = ["rock", "paper", "scissors"];
const $btnChoices = document.querySelectorAll('.choices .choice');
const $btnStart = document.querySelector('#start-game');

let playerScore = 0;
let machineScore = 0;


$btnStart.addEventListener('click', startGame)

function startGame() {
    resetGame();
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

function game(e) {
    playRound(e);
}

function playRound (e) {
    const playerSelection = userPlay(e)
    const machineSelection = computerPlay();

    showSelections(playerSelection, machineSelection);

    const roundResult = checkRoundWinner(playerSelection, machineSelection);
    highlightStatus(roundResult);

    updateScore(roundResult);
    showResultRound(roundResult);

    checkEndOfTheGame();
}

function userPlay(e) {
    return e.target.id;
}

function computerPlay () {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function showSelections (playerSelection, machineSelection) {
    const $containerPlayerChoice = document.querySelector('#player-choice');
    const $containerMachineChoice = document.querySelector('#machine-choice');

    $containerPlayerChoice.textContent = playerSelection;
    $containerMachineChoice.textContent = machineSelection;
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

function highlightStatus (roundResult) {
    const $playerSelection = document.querySelector('.player-choice');
    const $machineSelection = document.querySelector('.machine-choice');

    if (roundResult === "You Win This Round!") {
        $playerSelection.classList.add('win-round');
        setTimeout(() => {
            $playerSelection.classList.remove('win-round');
        }, 1500);
        $machineSelection.classList.add('lose-round');
        setTimeout(() => {
            $machineSelection.classList.remove('lose-round');
        }, 1500);
    } else if (roundResult === "You Lose This Round!") {
        $playerSelection.classList.add('lose-round');
        setTimeout(() => {
            $playerSelection.classList.remove('lose-round');
        }, 1500);
        $machineSelection.classList.add('win-round');
        setTimeout(() => {
            $machineSelection.classList.remove('win-round');
        }, 1500);
    } else {
        $playerSelection.classList.add('tie-round');
        setTimeout(() => {
            $playerSelection.classList.remove('tie-round');
        }, 1500);
        $machineSelection.classList.add('tie-round');
        setTimeout(() => {
            $machineSelection.classList.remove('tie-round');
        }, 1500);
    }
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
    } else if (roundResult === 0) {
        $playerScore.textContent = playerScore.toString().padStart(2, '0');
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
        disableDashboard();
        changeTextButton();
        enableButtonStart();      
    } else if (machineScore === 5) {
        showDefeatMessage($resultGame);
        disableDashboard();
        changeTextButton();
        enableButtonStart();
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

function disableDashboard () {
    const $dashboard = document.querySelectorAll('.choices .container-frame');

    $dashboard.forEach((option) => {option.classList.add('disabled')});
}

function changeTextButton () {
    const $button = document.querySelector('#start-game');

    $button.textContent = 'Restart game';
}

function enableButtonStart () {
    const $buttonStart = document.querySelector('#start-game');

    $buttonStart.classList.remove('disabled');
}

function resetGame () {
    playerScore = 0;
    machineScore = 0;

    updateScore(0);
    showSelections('', '');
}