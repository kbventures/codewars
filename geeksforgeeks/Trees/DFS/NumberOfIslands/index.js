https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandSpaces =0;
    let islands =0; 
    // x,y
    // let circle = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]] 
    let circle = [[-1,0],[0,1],[1,0],[0,-1]] 


    function dfs(g,x,y){
        islandSpaces++
        grid[x][y]="0";
        for(const [px,py] of circle){
            let tempX = x+px
            let tempY = y+py
            if(tempX < 0 || tempY < 0 || tempX >= grid.length || tempY >= grid[0].length) continue
            console.log(grid[tempX][tempY])
            let tempValue = grid[x+px][y+py]

            if(tempValue=="1"){
                dfs(grid,tempX,tempY )
            }
        }                    
        return; 
    }

    for(let r =0;r< grid.length;r++){
        for(let c=0;c<grid[0].length;c++){
            console.log("grid.length", grid.length)
            console.log("grid 0 length", grid[0].length)
            console.log("r c", r,c)
            if(grid[r][c]=="1"){
                islands++
                dfs(grid,r,c)
            }
        }
    }
    console.log("islands spaces", islandSpaces)
    console.log("islands", islands)
    return islands; 
};