// Prep Parameters Return Example Pseudocode


// Parameters:
// board 
// [ ["I","L","A","W"],
//   ["B","N","G","E"],
//   ["I","U","A","O"],
//   ["A","S","R","L"] ]
// word

// Returns true if a valid guess is found. Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

// Example word = "C" retunrs true while "EARS" returns false

// Pseudocode 
// 
//1) Calling function and passing word and board has parameter
//2) Traversin throught the matrix  by rows and then colomns 
//3) Calling DFS function recursively on each starting position
//4) Check if current position matching the current letter. Else return false. 
//5)


let testBoard = 
[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]


function checkWord(board, word){
    const positionAround = [[0,-1], [1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]]

    function dfs(i,j,index){
        if(i< 0 || i >= board.length || j < 0 || j >= board[0].length || word[index] !== board[i][j]){
            return false 
        }        
        // Letter matches so we increase index by one to check the next lettert
        index++
        if(index === word.length) return true; 
        let temp = board[i][j];
        console.log("temp", temp);
        board[i][j] = " ";

        console.log("Checking board", board)
        for(let y = 0; y < positionAround.length;y++){
            if(dfs(i + positionAround[y][0], j + positionAround[y][1], index)){
                board[i][j] = temp;
                return true; 
            }
        }
        index--
        board[i][j] = temp;
        console.log("Board back track", board)
        return false; 
    }

    // Traverse the entire matrix 
    for(let i = 0; i<board.length;i++){
        for(let j=0; j<board[0].length;j++){
            // Death First Seach From Each Space Until a path is found
            console.log("Current start", board[i][j])
            if(dfs(i,j,0)){
                return true;
            };
        }
    }
    return false; 
}

// Test.expect( checkWord( testBoard, "C" ) == true );
// Test.expect( checkWord( testBoard, "EAR" ) == true );
// Test.expect( checkWord( testBoard, "EARS" ) == false );
// Test.expect( checkWord( testBoard, "BAILER" ) == true );
// Test.expect( checkWord( testBoard, "RSCAREIOYBAILNEA" ) == true, "Must be able to check indefinite word lengths going in all directions" );
// Test.expect( checkWord( testBoard, "CEREAL" ) == false, "Valid guesses can't overlap themselves" );
// Test.expect( checkWord( testBoard, "ROBES" ) == false, "Valid guesses have to be adjacent" );
// Test.expect( checkWord( testBoard, "BAKER" ) == false, "All the letters have to be in the board" );
// Test.expect( checkWord( testBoard, "CARS" ) == false, "Valid guesses cannot wrap around the edges of the board" );
// console.log(checkWord(testBoard,"C"));

console.log(checkWord(testBoard,"EAR"));


// console.log(checkWord(testBoard,"BAILER"));
// console.log(checkWord(testBoard,"RSCAREIOYBAILNEA"));
// console.log(checkWord(testBoard,"CEREAL"));
// console.log(checkWord(testBoard,"ROBES"));
// console.log(checkWord(testBoard,"BAKER"));
// console.log(checkWord(testBoard,"CARS"));