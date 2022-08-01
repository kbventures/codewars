//PREP
//
// Parameter is a string which can be empty and with upper or lower case characters.
//
// Return: the first non case sensitive repeating letter
//
// Example: a returns a and sTress returns 'T'
// 
// Pseucode: 
// If the Lenght the string is 0 or 1 return itself. If not, 
// make a new array based on the string and make all letters lower case
// 

//PREP
//
// Parameter is a string which can be empty and with upper or lower case characters.
//
// Return: the first non case sensitive repeating letter
//
// Example: a returns a and sTress returns 'T'
// 
// Pseucode: 
// If the Lenght the string is 0 or 1 return itself. If not, 
// make a new array based on the string and make all letters lower case
// 

//PREP
//
// Parameter is a string which can be empty and with upper or lower case characters.
//
// Return: the first non case sensitive repeating letter
//
// Example: a returns a and sTress returns 'T'
// 
// Pseucode: 
// If the Lenght the string is 0 or 1 return itself. If not, 
// make a new array based on the string and make all letters lower case
// 

function firstNonRepeatingLetter(str) {
    let temp = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        let char = temp[i];
        if (temp.indexOf(char) == i && temp.indexOf(char, i + 1) == -1) {
            return str[i];
        }
    }
    return "";
}