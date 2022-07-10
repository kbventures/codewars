// PREP
// Parameter string phrase container letters spaes and punctuations
// Return new string phrase, on every word move the first letter to end of it and add ay
// Punctuations are left untouched.
// Example: "Pig latin !" returns igPay atinlay !
// Pseudocode split the string into array divided by spaces
// loop throught array.  If word move first letter to the end and add 'ay" otherwise do nothing'

function pigIt(str) {
    //Code here
    return str.split(' ').map(e => {
        return e[0].match(/^[.,:!?]/) ? e[0] : e.slice(1) + e[0] + 'ay'
            ;
    }).join(' ')
}