// PREP
//
// Parameter: n is non negative interger as input
// Returns: list of all powers of 2 with exponent ranging form 0 to 0(inclusive)
function powersOfTwo(n) {
    // Pseudocode
    // create result array
    // loop from 0 to the n inclusively
    // for every number we loop through add its powers of 2 to the array
    // after loop complete return result array

    let result = []
    for (let i = 0; i <= n; i++) {
        result.push(Math.pow(2, i))
    }
    return result
}


  // Example: 0 returns [1]
  // Example: 1 returns [1,2]
  // Eaxample: 2 returns [1,2,4]