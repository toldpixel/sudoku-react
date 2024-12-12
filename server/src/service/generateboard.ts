// Generate an Empty Board
function createEmptyBoard(n) {
  return Array.from({ length: n }, () => Array(n).fill("."));
}

// Check if the number is valid in a specific cell
function isValid(board, row, col, num) {
  const N = board.length;
  const subgridSize = Math.sqrt(N); // Dynamically determine subgrid size

  // Check row
  if (board[row].includes(num)) return false;

  // Check column
  for (let i = 0; i < N; i++) {
    if (board[i][col] === num) return false;
  }

  // Check subgrid
  const startRow = Math.floor(row / subgridSize) * subgridSize;
  const startCol = Math.floor(col / subgridSize) * subgridSize;

  for (let i = 0; i < subgridSize; i++) {
    for (let j = 0; j < subgridSize; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }
  return true;
}

// Backtracking Algorithm to Generate the Board
function solveSudoku(board) {
  const N = board.length;

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === ".") {
        const numbers = shuffle(
          Array.from({ length: N }, (_, i) => (i + 1).toString())
        );

        for (const num of numbers) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) return true;
            board[row][col] = "."; // Backtrack
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Remove Numbers for Difficulty
function removeNumbers(board, difficulty) {
  const N = board.length;
  const attempts =
    difficulty === "Easy"
      ? N === 9
        ? 30
        : 10
      : difficulty === "Medium"
      ? N === 9
        ? 40
        : 15
      : 50;

  let cellsRemoved = 0;

  while (cellsRemoved < attempts) {
    const row = getRandomInt(N);
    const col = getRandomInt(N);

    if (board[row][col] !== ".") {
      board[row][col] = ".";
      cellsRemoved++;
    }
  }
  return board;
}

// Helper Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Main Function: Generate Board
export function generateBoard(n, difficulty) {
  if (![4, 9].includes(n)) {
    throw new Error("Only 4x4 or 9x9 Sudoku boards are supported.");
  }

  const board = createEmptyBoard(n);
  solveSudoku(board); // Fill the board
  removeNumbers(board, difficulty); // Create the puzzle
  console.log(board);
  return board;
}
