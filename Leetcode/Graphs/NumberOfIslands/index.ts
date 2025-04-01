// https://leetcode.com/problems/number-of-islands/


// Time Complexity: O(n * m), where n is the number of rows and m is the number of columns in the grid. You visit each cell once.

// Space Complexity: O(n * m) in the worst case due to the recursion stack, where every cell could be visited recursively.
function numIslands(grid: string[][]): number {
    const XY = [[-1,0],[0,1],[1,0],[0,-1]]

    let numberOfIslands = 0; 

    function dfs(x:number,y:number):void{
        grid[x][y]="0"
        for(let i = 0; i<= XY.length -1; i++){
            let xXY = x + XY[i][0]
            let yXY = y + XY[i][1]
            
            // Out of bounds
            // Check bounds to avoid out-of-bounds errors
            if (xXY >= 0 && yXY >= 0 && xXY < grid.length && yXY < grid[0].length) {
                // If the cell is part of the island ('1'), run DFS
                if (grid[xXY][yXY] === "1") {
                    dfs(xXY, yXY);
                }
            }
        }
    }
    // Traverse the grid
    for(let x =0; x <= grid.length-1;x++ ){
        for(let y = 0; y<=grid[0].length-1;y++){
            // console.log(x,y)
            if(grid[x][y]=="1"){
                dfs(x,y)
                numberOfIslands++
            }
        }
    }

    return numberOfIslands; 
};