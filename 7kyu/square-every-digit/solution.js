// PREP
//
// Parameters an integer
// Returns a square of every number in the passed integer which is then concatenated
//

function squareDigits(num) {
    // Pseudocode
    // split hte number into an array of single digits
    // loop throught created and square all elements
    // concatenate elements and return number

    return Number((String(num).split('').map(e => {
        return Math.pow(Number(e), 2)
    })).join(''))
}


  // Example
  // squareDigits(1234)// Returns 14916