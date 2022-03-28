const CHOICES = ["rock", "paper", "scissors"];

function computerPlay () {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function userPlay() {
    const userChoice = prompt('Please, enter: "Rock", "Paper" or "Scissors".').toLowerCase();
    return userChoice;
}

