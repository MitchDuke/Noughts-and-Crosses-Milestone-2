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

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        cells[index].classList.add(currentPlayer);
        checkWin();
        switchPlayer();
    }
};

// Switch between players

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

//Check for winner function

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] =combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            handleWin(board[a]);
            return;
        }
    }

    if (board.every(cell => cell !== '')) {
        handleDraw();
    }
};

// Handle a win

function handleWin(player) {
    if (plater === 'X') {
        player1Score++;
        player1ScoreElement.textContent = player1Score;
    } else {
        player2Score++;
        player1ScoreElement.textContent = player2Score;
    }

    resetBoard();
    alert('Player ${player} wins!');
};

// Handle a draw

function handleDraw() {
    resetBoard();
    alert('Its a draw, try again!');
};

// Reset the game

function resetGame() {
    
};

// Reset the board

function resetBoard() {

};

// Setup a game
resetBoard();