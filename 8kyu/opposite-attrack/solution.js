//PREP
//
// flower1 and flower 2 are integers
// Returns true if one of them is an odd number and the other is not else it returns false
//

function lovefunc(flower1, flower2) {
    // moment of truth
    // Pseudo code
    // Return true if they aren't both odd or even.
    // Else they return false
    if (flower1 % 2 === 0) {
        if (flower2 % 2 === 0) return false;
        return true;
    } else {
        if (flower2 % 2 === 0) return true
        return false
    }

}


  // lovefunc(2,6) returns false