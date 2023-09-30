// base variables
let board = ['', '', '', '', '', '', '', '', ''];
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
    cells[index].classList.add(currentPlayer.toLowerCase());
    checkWin();
    switchPlayer();
  }
}

// Switch between players
function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Handle a win
function handleWin(player) {
  if (player === 'X') {
    player1Score++;
    player1ScoreElement.textContent = player1Score;
  } else {
    player2Score++;
    player2ScoreElement.textContent = player2Score;
  }

  resetBoard();
  alert(`Player ${player} wins!`);
}

// Handle a draw
function handleDraw() {
  resetBoard();
  alert('Its a draw, try again!');
}

// Check for winner function
function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      handleWin(board[a]);
      return;
    }
  }

  if (board.every(cell => cell !== '')) {
    handleDraw();
  }
}

// Reset the game
function resetGame() {
  resetBoard();
  player1Score = 0;
  player2Score = 0;
  player1ScoreElement.textContent = '0';
  player2ScoreElement.textContent = '0';
}

// Reset the board
function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
  });
}

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", resetGame);

// Setup a game
resetBoard();

//modal
const modal = document.getElementById('instructionsModal');
const closeModal = document.getElementById('closeModal');

//Show the modal when the page loads
function showModal() {
  modal.style.display = 'block';
}

//close model when close button is clicked
function closeInstructionsModal() {
  modal.style.display = 'none';
}

//Close modal when clicking outside the modal
function closeOnOutsideClick(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

window.onload = showModal;
closeModal.onclick = closeInstructionsModal;
window.onclick = closeOnOutsideClick;