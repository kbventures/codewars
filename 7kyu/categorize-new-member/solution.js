// PREP
//
// Parameter: A array of arrays container pairs of numbers about a single potential memeber. The first number
// an integer for the member's age and the second integer for the member's handicap. 
//
//Return a new array which places new members in a "Open" or "Senior" string based on wether their age is 
// greater than 55 and handicap greater than 7. 
// Example: [[45, 12],[55,21],[19, -2],[104, 20]] returns ['Open', 'Senior', 'Open', 'Senior']
// Pseudocode:
// Map the received array or arrays to a new array.  Check array position 0 and check if age is greater than 55
// and also check if handicap in position 1 of the current inner array is greater than 7. If both are true
// Map a "Senior" string in the new array otherwise "Open"

function openOrSenior(data) {
    // ...
    return data.map(e => e[0] >= 55 && e[1] > 7 ? "Senior" : "Open")
}