// https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function(board) {
//     // Initialize 9 sets to track numbers in each 3x3 subgrid
// const boxSets = Array.from({ length: 9 }, () => new Set());

// // Function to determine the box index for a given (row, col)
// function getBoxIndex(row, col) {
//   return Math.floor(row / 3) * 3 + Math.floor(col / 3);
// }

// // Example of how to populate the box sets while traversing the board
// const board = [
//   // A sample 9x9 Sudoku board
//   [5, 3, 0, 0, 7, 0, 0, 0, 0],
//   [6, 0, 0, 1, 9, 5, 0, 0, 0],
//   [0, 9, 8, 0, 0, 0, 0, 6, 0],
//   [8, 0, 0, 0, 6, 0, 0, 0, 3],
//   [4, 0, 0, 8, 0, 3, 0, 0, 1],
//   [7, 0, 0, 0, 2, 0, 0, 0, 6],
//   [0, 6, 0, 0, 0, 0, 2, 8, 0],
//   [0, 0, 0, 4, 1, 9, 0, 0, 5],
//   [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ];

// // Traversing the board and adding numbers to the appropriate box set
// for (let row = 0; row < 9; row++) {
//   for (let col = 0; col < 9; col++) {
//     const num = board[row][col];
//     if (num !== 0) {  // Only process filled cells
//       const boxIndex = getBoxIndex(row, col);  // Get the box index
//       boxSets[boxIndex].add(num);  // Add the number to the corresponding box set
//     }
//   }
// }

// console.log(boxSets);  // Display the sets for each box
// };




const board = [
  // A sample 9x9 Sudoku board
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

var isValidSudoku = function(board) {

  const rowSets = Array.from({length:9},() => new Set())
  const colSets = Array.from({length:9},()=> new Set())
  
  // let boxes = {};
  
  // let row = 0, col = 0; // Example position
  // let boxKey = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
  
  // if (!boxes[boxKey]) {
  //     boxes[boxKey] = new Set();
  // }
  
  // boxes[boxKey].add(number);

  
  // Traverse board and check rowSets, colSets and boxes for ilegal numbers

  // x corresponds to column while y responds to row
  
  // Traverse the columns 
  for(let y=0;y < board.length;y++){
    for(let x= 0;x<board[y].length;x++){
      // console.log(x,y)
      console.log(board[y][x])
      if(rowSets[])
    }
  }

    // Traverse the rows
    // for(let y=0;y < board.length;y++){
    //   for(let x= 0;x<board[y].length;x++){
    //     // console.log(x,y)
    //     console.log(board[y][x])
    //   }
    // }
  
  return true; 
  };

  const result = isValidSudoku(board)
  console.log("sudoku result", result)

