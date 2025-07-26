// Select the board container and status text element
const board = document.getElementById('board');
const statusText = document.getElementById('status');

// Set initial player and game state
let currentPlayer = 'X'; // 'X' starts the game
let gameActive = true; // Game is active until a win or draw occurs

// Initialize an empty board state
let boardState = Array(9).fill(''); // Array to track cell values

// Define all possible winning combinations
const winningCombinations = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Main diagonal
  [2, 4, 6]  // Other diagonal
];

// Function to create the game board dynamically
function createBoard() {
  board.innerHTML = ''; // Clear existing board elements

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div'); // Create a new cell
    cell.classList.add('cell'); // Assign cell class for styling
    cell.dataset.index = i; // Store cell index for tracking
    cell.addEventListener('click', handleClick); // Add click event listener
    board.appendChild(cell); // Append cell to board
  }
}

// Function to handle cell click events
function handleClick(e) {
  const index = e.target.dataset.index; // Get clicked cell index

  // Prevent moves on already occupied cells or when the game is inactive
  if (boardState[index] !== '' || !gameActive) return;

  // Update the board state
  boardState[index] = currentPlayer; // Set player mark
  e.target.textContent = currentPlayer; // Display mark in UI
  e.target.classList.add(currentPlayer.toLowerCase()); // Add styling class

  // Check for a winning move
  if (checkWin()) {
    statusText.textContent = `Player ${currentPlayer} Wins! 🎉`; // Show win message
    gameActive = false; // Stop further moves
    return;
  }

  // Check for a draw when all cells are filled
  if (boardState.every(cell => cell !== '')) {
    statusText.textContent = "It's a Draw!"; // Show draw message
    gameActive = false; // Stop further moves
    return;
  }

  // Switch to the next player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle between 'X' and 'O'
  statusText.textContent = `Player ${currentPlayer}'s Turn`; // Update status
}

// Function to check for winning conditions
function checkWin() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;

    // Return true if all three positions in a combination have the same player mark
    return (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    );
  });
}

// Function to reset the game
function resetGame() {
  currentPlayer = 'X'; // Reset to player 'X'
  gameActive = true; // Reactivate the game
  boardState = Array(9).fill(''); // Clear board state
  statusText.textContent = "Player X's Turn"; // Reset status text
  createBoard(); // Recreate the board
}

// Initialize the board and status text when the game starts
createBoard();
statusText.textContent = "Player X's Turn";