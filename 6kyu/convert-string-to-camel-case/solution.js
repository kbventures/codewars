// Prep
// Paramter a string of words seperate by - or _
//
// Returns: if empty returns empty otherwises it removes the - abd _ and returns a camel case version
//

// Pseudo code
// First the function if string is empty, if so it returns an empty string
// Second create a new array split by - or _
// Concatenate the first one to the a result string variable
// Loop through the remainder of the array, Upper Case the First Letter Of The Current Item and concatenate this to the result string
// Return the result string

function toCamelCase(str) {
    if (str === '') return str
    let removedUndercore = str.replace(/_/g, "*")
    let removedDash = removedUndercore.replace(/-/g, "*")
    let removedDashAndUnderScore = removedDash.split('*')
    let result = "" + removedDashAndUnderScore[0];
    for (let i = 1; i < removedDashAndUnderScore.length; i++) {
        let firstElementOfRemovedDashAndUnderScore = removedDashAndUnderScore[i];
        let toUpperCaseOfFirstElementOfRemovedDashAndUnderScore = firstElementOfRemovedDashAndUnderScore.charAt(0).toUpperCase() + firstElementOfRemovedDashAndUnderScore.slice(1);
        result = result + toUpperCaseOfFirstElementOfRemovedDashAndUnderScore
    }
    console.log(result)
    return result
}


//Example
// toCamelCase('string_The-test) returns stringTheTest
toCamelCase('string_The-test')