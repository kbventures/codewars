/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// V1 FAILS
//

// V2 FAILS
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function(board) {
//     console.log("starst at",board)
//     // let surrounded = true; 
//     let checkSurround = [[-1,0],[0,1],[1,0],[0,-1]]

//     function dfs(b, x, y, s) {
//     b[x][y] = "X";
//     for ([bX, bY] of checkSurround) {
//         let tempX = x + bX;
//         let tempY = y + bY;
//         if (tempX < 0 || tempY < 0 || tempX >= b.length || tempY >= b[0].length) {
//             s = false;
//             continue;
//         }
//         if (b[tempX][tempY] == "O") {
//             s = dfs(b, tempX, tempY, s); // Update s based on the result of recursive call
//         }
//     }
//     if (s == false) {
//         b[x][y] = "."; // Mark as unbounded if not surrounded
//     }
//     return s; // Return s for proper backtracking
// }

//     // Initial Board Traversal
//     for(let r =0; r<board.length;r++){
//         for(let c=0;c<board[0].length;c++){
//             if(board[r][c]=="O"){
//                 dfs(board,r,c, true)
//             }
//         }
//     }
//     // Revert tagged region . to X and O to X
//     for(let r =0; r<board.length;r++){
//         for(let c=0;c<board[0].length;c++){
//             if(board[r][c]==="."){
//                 board[r][c]="O";
//             } 
//         }
//     }
//     console.log("result", board)
//     return board
// };

// V3 FAIL
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function(board) {
//     // console.log("starst at",board)

//     let checkSurround = [[-1,0],[0,1],[1,0],[0,-1]]
//     // let checkSurround = [[0,-1],[1,0],[0,1],[-1,0]]

//     function dfs(b, x, y, s) {
//     b[x][y] = "X";
//     for ([bX, bY] of checkSurround) {
//         let tempX = x + bX;
//         let tempY = y + bY;
//         console.log("tempX, tempY",tempX, tempY)
//         if (tempX < 0 || tempY < 0 || tempX >= b.length || tempY >= b[0].length) {
//             // console.log("false",x,y)
//             s = false;
//             continue;
//         }
//         if (b[tempX][tempY] == "O") {
//             s = dfs(b, tempX, tempY, s); // Update s based on the result of recursive call
//         }
//     }
//     if (s == false) {
//         b[x][y] = "."; // Mark as unbounded if not surrounded
//     }
//     // console.log("current board",b,s)
//     return s; // Return s for proper backtracking
// }

//     // Initial Board Traversal
//     for(let r =0; r<board.length;r++){
//         for(let c=0;c<board[0].length;c++){
//             console.log("traversing at: ",r,c)

//             if(board[r][c]=="O"){
//                 // console.log("traversing at: ",r,c)
//                 dfs(board,r,c, true)
//             }
//         }
//     }
//     // Revert tagged region . to X and O to X
//     for(let r =0; r<board.length;r++){
//         for(let c=0;c<board[0].length;c++){
//             if(board[r][c]==="."){
//                 board[r][c]="O";
//             } 
//         }
//     }
//     // console.log("result", board)
//     return board
// };

// const result = solve([
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'O', 'O', 'O', 'O', 'X', 'X' ],
//     [ 'X', 'X', 'O', 'O', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ]
//   ])

// V4
// var solve = function(board) {
//     console.log("starst at",board)

//     // r c == y x starting from top going right
//     let checkSurround = [[1,0],[0,1],[-1,0],[0,-1]]
//     function dfs(b, y, x, s) {
//     b[y][x] = "X";
//     for ([bY, bX] of checkSurround) {
//         let tempX = x + bX;
//         let tempY = y + bY;
//         if (tempX < 0 || tempY < 0 || tempX >= b.length || tempY >= b[0].length) {
//             s = false;
//             continue;
//         }
//         if (b[tempX][tempY] == "O") {
//             s = dfs(b, tempX, tempY, s); // Update s based on the result of recursive call
//         }
//     }
//     if (s == false) {
//         b[x][y] = "."; // Mark as unbounded if not surrounded
//     }
//     return s; // Return s for proper backtracking
// }

//     // Initial Board Traversal
//     for(let r =0; r<board.length;r++){
//         for(let c=0;c<board[0].length;c++){
//             if(board[r][c]=="O"){
//                 dfs(board,r,c, true)
//             }
//         }
//     }
//     // Revert tagged region . to X and O to X
//     for(let r =0; r<board.length;r++){
//         for(let c=0;c<board[0].length;c++){
//             if(board[r][c]==="."){
//                 board[r][c]="O";
//             } 
//         }
//     }
//     console.log("result", board)
//     return board
// };

// const result = solve([
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'O', 'O', 'O', 'O', 'X', 'X' ],
//     [ 'X', 'X', 'O', 'O', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ]
//   ])


// const result = solve([
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ]
//   ])


// V5 WORKING BUT INEFFICIENT
/**
 * Solves the "Surrounded Regions" problem on a 2D board inplace by flipping surrounded 'O's to 'X's.
 * Only 'O's on the border or connected to an 'O' on the border will remain as 'O'.
 * @param board A 2D array of strings representing the board
 */
function solve(board) {
    console.log("start",board)

    const rowL = board.length -1;
    const columnL = board[0].length-1;
    const directions=[[-1,0],[0,1],[1,0],[0,-1]]


    // DFS border "O" regions and flip them to "."

    function DFS(y,x){
        board[y][x] = "."
        console.log("DFS O",board[y][x],y,x)
        for([bY,bX] of directions){
            let tempY = bY + y;
            let tempX = bX + x
            if(tempY < 0 || tempX < 0 || tempY >= board.length || tempX >= board[0].length){
                continue; 
            }
            if(board[tempY][tempX]== "O"){
                DFS(tempY,tempX);
            }         
        }
    }


    // Travere 2d Matrix, Identify Border "O" Regions and Call DFS 
    for(let r=0; r<=rowL;r++){
        for(let c=0; c<=columnL;c++){
            const borderCell= r == 0 || c == 0 || r == rowL || c == columnL
            if(borderCell && board[r][c]=="O"){
                DFS(r,c)
            }
        }
    }


    // Flip surrounded regions to X and . to O
    for(let r=0; r<=rowL;r++){
        for(let c=0; c<=columnL;c++){
            if(board[r][c]=="O"){
                board[r][c] = "X"
            } else if (board[r][c]=="."){
                board[r][c]="O"
            }
        }
    }
    console.log("result",board)
    return board; 
}

// const result = solve([
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'O', 'O', 'O', 'O', 'X', 'X' ],
//     [ 'X', 'X', 'O', 'O', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'X' ]
//   ])


const result = solve([
    ["O","O","O"],
    ["O","O","O"],
    ["O","O","O"]
])



// SOLUTION
/**
 * Solves the "Surrounded Regions" problem on a 2D board inplace by flipping surrounded 'O's to 'X's.
 * Only 'O's on the border or connected to an 'O' on the border will remain as 'O'.
 * @param board A 2D array of strings representing the board
 */
// function solve(board) {
//     // Depth-first search to mark 'O's connected to the borders as temporary '.'
//     function depthFirstSearch(row, col) {
//         board[row][col] = '.';
//         const directions = [-1, 0, 1, 0, -1]; // Directions array to simplify the exploration of adjacent cells

//         // Explore all four directions
//         for (let k = 0; k < 4; ++k) {
//             const newRow = row + directions[k];
//             const newCol = col + directions[k + 1];

//             // If the new cell has 'O' and is within the bounds, continue the DFS
//             if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && board[newRow][newCol] == 'O') {
//                 depthFirstSearch(newRow, newCol);
//             }
//         }
//     }

//     const numRows = board.length;
//     const numCols = board[0].length;

//     // Start DFS from 'O's on the border
//     for (let row = 0; row < numRows; ++row) {
//         for (let col = 0; col < numCols; ++col) {
//             const isBorderCell = row == 0 || row == numRows - 1 || col == 0 || col == numCols - 1;
//             if (isBorderCell && board[row][col] == 'O') {
//                 depthFirstSearch(row, col);
//             }
//         }
//     }

//     // Post-process to complete the flip of surrounded regions
//     for (let row = 0; row < numRows; ++row) {
//         for (let col = 0; col < numCols; ++col) {
//             if (board[row][col] == '.') {
//                 board[row][col] = 'O';                        // Restore temporary '.' to 'O'
//             } else if (board[row][col] == 'O') {
//                 board[row][col] = 'X';                        // Flip completely surrounded 'O's to 'X'
//             }
//         }
//     }
// }










