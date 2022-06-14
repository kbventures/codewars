// PREP 
//
// Parameters: empty array or array array of letters
// Return: Retuns an array of string with a number,':' and a space in front of the letter in the array
// 
var number = function (array) {
    // Pseudo Code
    //your awesome code here
    // sends array back if empty
    // otherwise it maps a new array starting with the element position number, : , " " and the respective element string
    return array.length !== 0 ? array.map((e, i) => `${i + 1}: ${e}`) : []
}

  // Example:
  // number([])// returns array
  // number('a','b','c') // return ['1: a','2: b','3: c']