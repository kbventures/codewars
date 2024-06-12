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
var solve = function(board) {
    // console.log("starst at",board)

    // r c == y x starting from top going right
    let checkSurround = [[1,0],[0,1],[-1,0],[0,-1]]
    function dfs(b, y, x, s) {
    b[y][x] = "X";
    for ([bX, bY] of checkSurround) {
        let tempX = x + bX;
        let tempY = y + bY;
        // console.log("tempX, tempY",tempX, tempY)
        if (tempX < 0 || tempY < 0 || tempX >= b.length || tempY >= b[0].length) {
            // console.log("false",x,y)
            s = false;
            continue;
        }
        if (b[tempX][tempY] == "O") {
            s = dfs(b, tempX, tempY, s); // Update s based on the result of recursive call
        }
    }
    if (s == false) {
        b[x][y] = "."; // Mark as unbounded if not surrounded
    }
    // console.log("current board",b,s)
    return s; // Return s for proper backtracking
}

    // Initial Board Traversal
    for(let r =0; r<board.length;r++){
        for(let c=0;c<board[0].length;c++){
            // console.log("traversing at: ",r,c)

            if(board[r][c]=="O"){
                // console.log("traversing at: ",r,c)
                dfs(board,r,c, true)
            }
        }
    }
    // Revert tagged region . to X and O to X
    for(let r =0; r<board.length;r++){
        for(let c=0;c<board[0].length;c++){
            // console.log(r,c)
            if(board[r][c]==="."){
                board[r][c]="O";
            } 
        }
    }
    // console.log("result", board)
    return board
};

const result = solve([
    [ 'X', 'X', 'X', 'X', 'X', 'X' ],
    [ 'X', 'X', 'X', 'X', 'X', 'X' ],
    [ 'X', 'X', 'X', 'X', 'X', 'X' ],
    [ 'O', 'O', 'O', 'O', 'X', 'X' ],
    [ 'X', 'X', 'O', 'O', 'X', 'X' ],
    [ 'X', 'X', 'X', 'X', 'X', 'X' ]
  ])





