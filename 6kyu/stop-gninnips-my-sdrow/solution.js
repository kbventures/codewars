// PREP
// Parameter string is a phrase with no numbers or punctuation
// Returns The same phrase but with words with length greater than 4 reversed
// Example: if string is equal to "hello world", the function returns "hello dlrow"
//Pseudocode:
// Split the string phrase into an array and loop through it.
// If the current word's length is less than 5 return it.  Otherwise, split this word 
// in single digits, reverse the order, rejoin the sting and return it it reversed.
// Rejoin the new array and return this new string phrase. 
function spinWords(string) {
    //TODO Have fun :)

    return string.split(' ').map(e => {
        console.log(e)
        if (e.length > 4) {
            return e.split('').reverse().join('')
        }
        return e
    }).join(' ')
}