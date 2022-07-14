// PREP
// Parameter A is a number array
// Returns the number who's total count is ODD
// Example: [1,1,2] returns 1
// Pseudocode loop throught the number Array, for every loop cycle compare initial loop number to the the entire loop using an inner loop. 
// If it finds it a copy of itself add 1 to a counter you set at the beginner of the princical loop. 
// THe First comparison will always be itself so +1 and then +1 if more are found.  
// Once teh inner loop comparison cycle is complete.
// Check to see if the counter is odd, if it is currenty current principal loop integer


function findOdd(A) {
    //happy coding!

    for (let i = 0; i < A.length; i++) {
        let counter = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) { counter++ }
        }
        if (counter % 2 !== 0) { return A[i] }
    }
}