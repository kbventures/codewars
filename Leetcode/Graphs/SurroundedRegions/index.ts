
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