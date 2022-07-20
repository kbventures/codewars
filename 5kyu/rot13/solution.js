// Prep 
//
// Parameter is a phrase string containing letters upper and lower case, spaces and punctuation
// Return a new string where the letters are replaced by there upper case or lower equivalent 13 position ahead
// Example m returs z, M returns Z, n returns a, N returns A and mMnN. returns zZaA.
// Pseudo split your string into an array and loop throug this array using map.
// If character is not a letter return as is but if it is a letter add 13 position forward to its charcode lower case equivalent.

function rot13(message) {
    //your code here
    return message.split('').map(e => {
        // is a letter because only letter lower case is not equal to letter upper is true)
        if (e.toLowerCase() !== e.toUpperCase()) {
            // change position of letter character code 13 ahead.  If passed z start over count from a. 
            // figure out out position of letter 
            // if charCodeAt greater  than 109 use this calculation or else just add 13 to number
            let temp;
            if (e.toLowerCase().charCodeAt(0) <= 109) {
                temp = String.fromCharCode(e.toLowerCase().charCodeAt(0) + 13);
            } else {
                temp = String.fromCharCode(e.toLowerCase().charCodeAt(0) + 13 - 122 + 96)
            }


            if (e.toUpperCase() === e) {
                return temp.toUpperCase()
            } else {
                return temp;
            }
        }
        // return non letter character code as is
        return e

    }).join('')
}


console.log(rot13('%'))
console.log(rot13('%'))
// console.log(rot13('m'));
// console.log(rot13('M'));
// console.log(rot13('n'));
// console.log(rot13('N'));