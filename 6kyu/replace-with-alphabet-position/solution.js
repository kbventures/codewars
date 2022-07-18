// Prep
//
// Parameter is TEXT is a phrase
// Returns a string with the alphabet positon of every string in the TEXT string with a space in between
// Example "The" returns "20 8 5"
// Pseudocode split TEXT phase in to aray for every element. 
// Filter this array, if letter, change ot lowerCase and return its charAtCode -96 and finally return
// joined by space array

function alphabetPosition(text) {
    return (text.split('').filter(e => e.toLowerCase() != e.toUpperCase())).map(e => e.toLowerCase().charCodeAt() - 96).join(' ')
}


// Alternate solution
// function alphabetPosition(text) {
//     return text.toLowerCase().split('').map(a => a.charCodeAt() - 96).filter(a => a > 0 && a < 27).join(' ');
// }