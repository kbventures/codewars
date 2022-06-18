//PREP
//
// Parater odd of even string
// Returns the middle, one character if odd or 2 characters if even


function getMiddle(s) {
    //Code goes here!

    // Pseudo Code
    // Turn string into array so you can extract length
    // If the string lenght is even, divide lenght by 2 and return array index position using the division result and concatenate the array index position with division result + 1
    // If the string.length is odd divide string.lenght by two and round up.  return string at position using the result of this division and round up

    function getMiddle(s) {

        return s.length % 2 === 0 ? s[(s.length / 2) - 1] + s[(s.length / 2)] : s[(Math.floor(s.length / 2))]
    }

}

// Example
// getMiddle('yes') returns 'e'
// getMiddle('nono) returns 'on'


// Code Wars Solution

// return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
