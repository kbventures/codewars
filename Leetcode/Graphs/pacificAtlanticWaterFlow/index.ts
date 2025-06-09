function PacificAtanticWaterFlow(sampleGrid: number[][]): number[][]{

const result = [];
const rowLength = sampleGrid.length;
const colLength = sampleGrid[0].length;
console.log(rowLength,colLength)
const directions = [[0,-1], [1,0],[0,1],[-1,0]]

const grid = new Array(rowLength).fill(0).map( ()=>new Array(colLength).fill(0))
const visited = new Array(rowLength).fill(0).map(()=> new Array(colLength).fill(false))

function dfs(yCoor: number, xCoor: number){
if(visited[yCoor][xCoor]) return
grid[yCoor][xCoor]++
visited[yCoor][xCoor] = true; 
    for(let [dY, dX] of directions){
        let tempY = dY + yCoor;
        let tempX = dX + xCoor; 
        if(sampleGrid[yCoor][xCoor] <= (sampleGrid[tempY]?.[tempX] ?? -1)){
            console.log(sampleGrid[tempY][tempX])
            dfs(tempY, tempX)
        }
    }
}


// Traverse North Pacific
for(let x = 0, y =0; x < colLength; x++){
    dfs(y,x)
}

// Traverse West Pacific
for(let x =0, y =0; y<rowLength;y++){
    dfs(y,x)
}

// // Reset visited 
visited.forEach(e=>{
    e.fill(false)
})

// // Traverse South Atlantic
for(let x = 0, y = rowLength-1; x < colLength;x++){
    dfs(y,x)
}

// // Traverse East Atlantics
for(let y = 0, x = colLength-1; y < rowLength;y++){
    dfs(y,x)
}

// // Traverse grid and get tiles that are == to 2.(ie: tiles that trickle water to both the pacific and atlantic ocean)

for(let x = 0; x < rowLength; x++){  
    for(let y = 0; y < colLength; y++){
        if(grid[x][y] == 2) {
            result.push([x,y])
        }
    }
}

// return [[1]]
return result; 
}


const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]

const result = PacificAtanticWaterFlow(heights)
// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log(result)