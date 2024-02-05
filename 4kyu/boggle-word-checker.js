// https://www.codewars.com/kata/57680d0128ed87c94f000bfd

// BASE CASE

var testBoard = [
    ["E","A","R","A"],
    ["N","L","E","C"],
    ["I","A","I","S"],
    ["B","Y","O","R"]
  ];

  function checkWord(board, word) {
    
    // DFS function to explore possible paths
    function dfs(i, j, index) {

        // Log the current position for debugging
        // if (i >= 0 && i < board.length && j >= 0 && j < board[0].length) {
        //     console.log(i, j, index, board[i][j]);
        // }

        // Check if current position is out of bounds or doesn't match the current letter
        if (
            i < 0 || i >= board.length ||
            j < 0 || j >= board[0].length ||
            board[i][j] !== word[index]
        ) {
            return false;
        }
     
        // Check if the entire word has been found
        if (index === word.length - 1) {
//             console.log("Word Length === index true");
            return true;
        }
      
        // Temporarily mark the current position as visited
        const temp = board[i][j];
        board[i][j] = ' ';
      
        // Possible directions to explore
        const directions = [
            [-1, 0], [-1, 1], [0, 1], [1, 1],
            [1, 0], [1, -1], [0, -1], [-1, -1]
        ];

        // Explore each direction recursively
        for (const [deltaI, deltaJ] of directions) {
            const nextI = i + deltaI;
            const nextJ = j + deltaJ;

            if (dfs(nextI, nextJ, index + 1)) {
                // Backtrack when succesful
                board[i][j] = temp;
                return true;
            }
        }

        // Backtrack by restoring the original value at the current position
        board[i][j] = temp;
        return false;
      }

      // Iterate through each cell on the board as a potential starting point
      for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[0].length; j++) {
              // If a valid path is found, return true
              if (dfs(i, j, 0)) {
                  return true;
              }
          }
      }

      // If no valid path is found, return false
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
console.log(checkWord(testBoard,"RSCAREIOYBAILNEA"));
// console.log(checkWord(testBoard,"CEREAL"));
// console.log(checkWord(testBoard,"ROBES"));
// console.log(checkWord(testBoard,"BAKER"));
// console.log(checkWord(testBoard,"CARS"));