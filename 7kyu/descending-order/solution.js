// PREP
// 
// Parameter is a an interger
//
// Returns number sorted in descending order
// 
// Example: desceningOrder(123) returns 321
//
// Pseudocode
// Split the integer into an array
// Sort Array in Descending Order
// Joint Array into a single number
// Return number result

function descendingOrder(n) {
    return Number(String(n).split('').sort((a, b) => b - a).join(''))
}