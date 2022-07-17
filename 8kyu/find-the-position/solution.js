// Prep
//
// Parameter is a letter string
// Returns postion of letter in alphabet
// Example b returns "Position of alphabet: 2"
// Pseudo code
// return string litteral "Position of alphabet: alphabetPosition" and for alphabet position
// evaluate the characater code of the letter -96

function position(letter) {
    //Write your own Code!
    return `Position of alphabet: ${letter.charCodeAt() - 96}`
}