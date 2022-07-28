// PREP
// Parameter is passed to the function on call and accessible using THIS inside the function
// code block. 
// Returns a CamelCase version of the phrase.
// Examples "camel case " returns "CamelCase" and "" returns ""
// Pseudocode: First we must trim the outside of the phrase to reduce errors.
// then we transform phrase into string array with spaces used to as markers to seperate the words.
// We Check every array element and if its equal to "" we return "" otherwise we return
// a CamelCase version of the word.  Once the new array is mapped out we rejoin all the elements 
// seperating them by a space.
String.prototype.camelCase = function () {
    //your code here
    return this.trim().split(' ').map(e => { return this.length === 0 ? "" : e[0].toUpperCase() + e.slice(1) }).join('')
}