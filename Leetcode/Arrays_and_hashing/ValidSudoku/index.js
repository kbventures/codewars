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


const board = 
[[".",".",".",".","5",".",".","1","."],
 [".","4",".","3",".",".",".",".","."],
 [".",".",".",".",".","3",".",".","1"],
 ["8",".",".",".",".",".",".","2","."],
 [".",".","2",".","7",".",".",".","."],
 [".","1","5",".",".",".",".",".","."],
 [".",".",".",".",".","2",".",".","."],
 [".","2",".","9",".",".",".",".","."],
 [".",".","4",".",".",".",".",".","."]]

// var isValidSudoku = function(board) {

//   const rowSets = Array.from({length:9},() => new Set())
//   const colSets = Array.from({length:9},()=> new Set())
  
//   // let boxes = {};
  
//   // let row = 0, col = 0; // Example position
//   // let boxKey = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
  
//   // if (!boxes[boxKey]) {
//   //     boxes[boxKey] = new Set();
//   // }
  
//   // boxes[boxKey].add(number);

  
//   // Traverse board and check rowSets, colSets and boxes for ilegal numbers

//   // x corresponds to column while y responds to row
  
//   // Traverse the columns 
//   for(let y=0;y < board.length;y++){
//     for(let x= 0;x<board[y].length;x++){
//       // console.log(x,y)
//       console.log(board[y][x])
//       if(rowSets[])
//     }
//   }

//     // Traverse the rows
//     // for(let y=0;y < board.length;y++){
//     //   for(let x= 0;x<board[y].length;x++){
//     //     // console.log(x,y)
//     //     console.log(board[y][x])
//     //   }
//     // }
  
//   return true; 
//   };

//   const result = isValidSudoku(board)
//   console.log("sudoku result", result)

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function(board) {
//     // console.log(board)
//     let rowSets = Array.from({length:9},()=> new Set())
//     let colSets = Array.from({length:9},()=> new Set())
//     let boxes = {}
  
//     // Traverses the board columns
//     for(let x=0;x<board.length;x++){
//         for(let y =0;y<board[x].length;y++){
//             console.log(board[y][x])
//             if(rowSets[x].has(board[x][y])){
//                 return false; 
//             } else if(board[x][y] == ".") {
//                 continue;
//             } else {
//                 rowSets[x].add(board[x][y])
//             }
//         }
//     }
  
//         // Traverses the board rows
//      for(let x=0; x < 9;x++){
//         for(let y =0;y< 9;y++){
//             if(colSets[x].has(board[y][x])){
//                  console.log("row false")
//                 return false; 
//             } else if(board[y][x] == ".") {
//                 continue;
//             } else {
//                 colSets[x].add(board[y][x])
//             }
//         }
//     }
  
//     // Traverses the board columns
//     for(let x=0;x<board.length;x++){
//         for(let y =0;y<board[x].length;y++){
//          let currBox = `${Math.floor(x /3)}${Math.floor(y/3)}`
//         // 
//         if(board[x][y] !== "."){
//             if(boxes[currBox] && boxes[currBox].has(board[x][y])){
//                                 return false
//             } else if(boxes[currBox]){
//             boxes[currBox].add(board[x][y])
//             } else {
//             boxes[currBox] = new Set()
//             boxes[currBox].add(board[x][y])
//             }
//         }
//         //  
//         }
//     }
//     return true; 
//   };

//   // Is Valid Sudoku 

//   const result = isValidSudoku(board)

//   console.log("result: ",result)



// optimised version 
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowSets = Array.from({ length: 9 }, () => new Set());
    let colSets = Array.from({ length: 9 }, () => new Set());
    let boxSets = Array.from({ length: 9 }, () => new Set());

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            const value = board[x][y];
            if (value === ".") continue;

            const boxIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3);

            if (rowSets[x].has(value) || colSets[y].has(value) || boxSets[boxIndex].has(value)) {
                return false;
            }

            rowSets[x].add(value);
            colSets[y].add(value);
            boxSets[boxIndex].add(value);
        }
    }

    return true;
};


