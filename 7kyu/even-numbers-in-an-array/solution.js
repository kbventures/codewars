// PREP
//
// Parameters: an positive integer and an array containing integers
// Returns a new array of NUMBER length container the last even numbers in ARRAY provided
//

function evenNumbers(array, number) {
    // Pseudo code:
    // Loop through array started from the end and extract the nth NUMBER that are even 
    //
    let counter = number;
    let result = []
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] % 2 === 0) {
            result.unshift(array[i])
            counter--
            if (counter === 0) {
                break;
            }
        }
    }
    return result
}


  // evenNumbers([1,2,3,4],1)
  // [4]