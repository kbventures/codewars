function isValidSudoku(board: string[][]): boolean {
    const rowSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const colSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const boxes: Record<string, Set<string>> = {};

    // Check rows
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const value = board[x][y];
            if (value === ".") continue;
            
            if (rowSets[x].has(value)) {
                return false;
            }
            rowSets[x].add(value);
        }
    }

    // Check columns
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            const value = board[y][x];
            if (value === ".") continue;
            
            if (colSets[x].has(value)) {
                return false;
            }
            colSets[x].add(value);
        }
    }

    // Check 3x3 boxes
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const value = board[x][y];
            if (value === ".") continue;
            
            const currBox = `${Math.floor(x / 3)}${Math.floor(y / 3)}`;
            
            if (!boxes[currBox]) {
                boxes[currBox] = new Set();
            }
            
            if (boxes[currBox].has(value)) {
                return false;
            }
            
            boxes[currBox].add(value);
        }
    }

    return true;
}