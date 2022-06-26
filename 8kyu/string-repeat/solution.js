//PREP
//
//Parameters: n is an integer and s is a string
//
// returns string s repeatec n times

function repeatStr(n, s) {
    // Pseudo Code: loop n times and concat s to result string then return result string
    let result = ''
    while (n > 0) {
        n--
        result = result + s

    }
    return result;
}

  // Example: repeatStr(3,"!") returns !!!s