// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let result =0; 
    const directions = [[0,-1],[-1,0],[0,1],[1,0]]
    let temp = 0; 

function DFS(y,x){
    temp++
    grid[y][x]="."
    for([tempY,tempX] of directions){
        let currCoorY = tempY + y;
        let currCoorX = tempX + x; 
        if(currCoorY < 0 || currCoorX < 0 || currCoorY >= grid.length || currCoorX >= grid[0].length ){
            continue
        }
        if(grid[currCoorY][currCoorX]=="1"){
        DFS(currCoorY, currCoorX)
        }
    }
}

// Traverse Matrix Looking for Islands
for(let r=0; r<grid.length;r++){
    for(let c=0;c<grid[0].length;c++){
        // console.log(r,c)
        if(grid[r][c]== "1"){
            DFS(r,c)
            // Update max area island
            if(temp > result){
                result = temp; 
            }
            // reset temp counter
            temp =0; 
        }
    }
}
    return result; 
};