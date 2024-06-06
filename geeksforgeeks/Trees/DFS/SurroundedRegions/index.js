/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // let surrounded = true; 
    let checkSurround = [[-1,0],[0,1],[1,0],[0,-1]]

    function dfs(b,x,y,s){
        b[x][y] = "X"
        for([bX,bY] of checkSurround){
            let tempX = x+bX;
            let tempY = y+bY
            if(tempX < 0 || tempY < 0 || tempX >= board.length || tempY >= board[0].length) {
                // surrounded = false;
                s = false; 
                break; 
            }
            if(b[tempX][tempY] == "O"){
                dfs(b,tempX,tempY)
            }
        }
        if(s == false){
            b[x][y] = "O";
        }
    }

    for(let r =0; r<board.length;r++){
        for(let c=0;c<board[0].length;c++){
            if(board[r][c]=="O"){
                dfs(board,r,c, true)
                // surrounded = true; 
            }
        }
    }
    console.log("result", board)
    return board
};