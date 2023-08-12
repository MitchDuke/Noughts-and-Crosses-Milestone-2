//base variables

let board = ['', '', '', '', '', '', '', '', '']:
let currentPlayer = 'X';
let player1Score = 0;
let player2Score = 0;

// DOM elements
const cells = Array.from(document.getElementsByClassName('cell'));
const player1ScoreElement = document.getElementById('player1Score');
const player2ScoreElement = document.getElementById('player2Score');

// click event listeners for cells

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => makeMove(index));
});


// Make a move in game

function makeMove() {

};

// Switch between players

function switchPlayer() {

};

//Check for winner function

function checkWin() {

};

// Handle a win

function handleWin(player) {

};

// Handle a draw

function handleDraw() {

};

// Reset the game

function resetGame() {

};

// Reset the board

function resetBoard() {

};

// Setup a game
resetBoard();