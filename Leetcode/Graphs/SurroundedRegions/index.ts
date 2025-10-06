
function solve(board: string[][]): void {
    // Get board dimensions
    const rows: number = board.length;
    const cols: number = board[0].length;
  
    // Direction vectors for traversing up, right, down, left
    // Using pattern: [row-1, col], [row, col+1], [row+1, col], [row, col-1]
    const directions: number[] = [-1, 0, 1, 0, -1];
  

    const dfs = (row: number, col: number): void => {
        // Check boundaries and if current cell is 'O'
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== 'O') {
            return;
        }
      
        // Mark current 'O' cell as visited using temporary marker '.'
        board[row][col] = '.';
      
        // Explore all four adjacent cells
        for (let k = 0; k < 4; k++) {
            const nextRow: number = row + directions[k];
            const nextCol: number = col + directions[k + 1];
            dfs(nextRow, nextCol);
        }
    };
  
    // Mark all 'O' cells connected to left and right borders
    for (let i = 0; i < rows; i++) {
        dfs(i, 0);           // Left border
        dfs(i, cols - 1);    // Right border
    }
  
    // Mark all 'O' cells connected to top and bottom borders
    for (let j = 0; j < cols; j++) {
        dfs(0, j);           // Top border
        dfs(rows - 1, j);    // Bottom border
    }
  
    // Final pass: convert markers to final values
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === '.') {
                // Cells marked with '.' were connected to border, keep as 'O'
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                // Unmarked 'O' cells are surrounded, capture them as 'X'
                board[i][j] = 'X';
            }
            // 'X' cells remain unchanged
        }
    }
}



/**
 Do not return anything, modify board in-place instead.
 */

// Time Complexity: O(n * m) ✓ - You visit each cell at most once
// Space Complexity: O(n * m) - Due to recursion call stack in worst case
function solve(board: string[][]): void {
    const directions = [[-1,0],[0,1],[1,0],[0,-1]]

    function dfs(xCoor, yCoor){
        board[xCoor][yCoor] = "."
        for(const [xD, yD] of directions){
            let tempX = xD + xCoor;
            let tempY = yD + yCoor
            if(tempX < 0 || tempY < 0 || tempX >= board.length || tempY >= board[0].length || board[tempX][tempY] == "X" || board[tempX][tempY] == ".") continue

            dfs(tempX,tempY)
        } 

    }

    // East and west
  for(let i = 0; i < board.length;i++){

    // West
    if(board[i][0]=="O"){
        dfs(i,0)
    }

    // East
    if(board[i][board[0].length-1]=="O"){
        dfs(i,board[0].length-1)
    }
  }  

    // North and South
    for(let i = 0; i < board[0].length;i++){
    // North
    if(board[0][i] == "O"){
        dfs(0,i)
    }

    // South
    if(board[board.length-1][i]=="O"){
        dfs(board.length-1,i)
    }

  } 
    for(let x = 0; x < board.length;x++){
        for(let y = 0; y < board[0].length;y++){
            if(board[x][y] == "."){
                board[x][y] = "O"
            } else if( board[x][y]== "O"){
                board[x][y] ="X"
            }
        }
    }

};