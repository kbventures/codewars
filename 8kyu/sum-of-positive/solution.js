// Prep
// Parameter is a integer array
// Returns the sum of the positive numbers in the array
// Example [1,-2,3] returns 4
// Pseudocode
// Loop through the array, check if positive or negative number if positive sum to a defined accumulator


function positiveSum(arr) {
    return arr.reduce((acc, e) => Math.sign(e) === 1 ? acc + e : acc + 0, 0)
}