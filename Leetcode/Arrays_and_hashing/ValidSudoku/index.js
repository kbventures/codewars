// https://leetcode.com/problems/valid-sudoku/description/
var isValidSudoku = function(board) {
    let rowSets = Array.from({length: 9}, () => new Set());
    let colSets = Array.from({length: 9}, () => new Set());
    let boxes: Record<string, Set<string>> = {}; // Explicitly define type

    // Traverse the rows
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (board[x][y] === ".") continue;

            // Check row duplicates
            if (rowSets[x].has(board[x][y])) {
                return false;
            } else {
                rowSets[x].add(board[x][y]);
            }

            // Check column duplicates
            if (colSets[y].has(board[x][y])) {
                return false;
            } else {
                colSets[y].add(board[x][y]);
            }

            // Calculate the box id (3x3 grid)
            const boxId = Math.floor(x / 3) * 3 + Math.floor(y / 3);

            // Check box duplicates
            if (boxes[boxId] && boxes[boxId].has(board[x][y])) {
                return false;
            } else {
                if (!boxes[boxId]) {
                    boxes[boxId] = new Set();
                }
                boxes[boxId].add(board[x][y]);
            }
        }
    }

    return true;
};


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


