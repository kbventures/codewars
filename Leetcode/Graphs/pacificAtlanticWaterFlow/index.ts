// Time and Space Complexity of pacificAtlantic:
// Time Complexity:
// Let m be the number of rows and n be the number of columns.

// Each cell is visited at most twice (once from Pacific DFS, once from Atlantic DFS).

// In each DFS, we explore up to 4 directions per cell.

// So the total time complexity is O(m × n).

// Space Complexity:
// grid, visited arrays → O(m × n)

// Call stack for DFS recursion → O(m × n) in worst case

// So the total space complexity is O(m × n).

// Define the main function that returns all cells that have water flowing to both the Pacific and Atlantic ocean
function pacificAtlantic(heights: number[][]): number[][] {
const rowCount = heights.length; // Number of rows
const colCount = heights[0].length; // Number of columns
// Directions for moving up, down, left, or right
const directions = [
[1, 0], // move down
[0, 1], // move right
[-1, 0], // move up
[0, -1], // move left
];
// Grid to track the number of oceans each cell can flow to
const grid = new Array(rowCount).fill(0).map(() => new Array(colCount).fill(0));
// Visited matrix to prevent revisiting cells
const visited = new Array(rowCount).fill(0).map(() => new Array(colCount).fill(false));

// Define the depth-first search function to explore the grid
const dfs = (row: number, col: number) => {
if (visited[row][col]) {
return;
}
grid[row][col]++;
visited[row][col] = true;
const height = heights[row][col];
// Explore adjacent cells
for (const [dx, dy] of directions) {
const newRow = row + dx;
const newCol = col + dy;
// Check if the adjacent cell is within bounds and its height is higher or equal
if (height <= (heights[newRow]?.[newCol] ?? -1)) {
dfs(newRow, newCol);
}
}
};

// Flow from the Pacific Ocean (top and left edges)
for (let col = 0; col < colCount; col++) {
dfs(0, col);
}
for (let row = 0; row < rowCount; row++) {
dfs(row, 0);
}
// Reset visited cells before starting from the Atlantic Ocean (bottom and right edges)
visited.forEach(row => row.fill(false));

// Flow from the Atlantic Ocean (bottom and right edges)
for (let col = 0; col < colCount; col++) {
dfs(rowCount - 1, col);
}
for (let row = 0; row < rowCount; row++) {
dfs(row, colCount - 1);
}

// Collect cells where the water can flow to both oceans
const results: number[][] = [];
for (let row = 0; row < rowCount; row++) {
for (let col = 0; col < colCount; col++) {
if (grid[row][col] === 2) { // If water flows to both oceans
results.push([row, col]);
}
}
}
return results; // Return the list of cells with dual ocean water flow
}

// Example of how to use the function:
// const heights = [[...], [...], ...];
// const oceanCells = pacificAtlantic(heights);
// console.log(oceanCells);