// PREP
//
// Parameter; is an array of numbers which are greater than 0
// Returns: the smallest number than can be formed from the list using the digits only once
// Example: [1,3,1] returns 13
// Pseudocode: first create a set out of the array to eliminate the duplicates, then 
// sort them in ascending order, concatenate the first two numbes in the array and return
// this new string has a number

function minValue(values) {
    //your code here
    let test = Array.from(new Set(values)).sort((a, b) => a - b)
    return Number(test.map(e => {
        return String(e)
    }).join(''))

}