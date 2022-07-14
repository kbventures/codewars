
// PREP
// Parapmeter is a string with no spaces
// If array empty returns empty [], if string is even in numers it returns an array with string pairs
// If array if odd is returns array with string pairs except for the odd one leftwith and underscore.
// Only returns string stringwith attached with underscore if only one string
// Examples: 's' returns "s_" 'ss' returns ['ss'] etc
// Pseudocode: check to see how many charaters are in the string
// If none return [], if 1 return array and concatenate _, else return all strings in pair in array indexes
// if total is odd return stringpairs in array except for hte last one string with _ concatenated;


function solution(str) {
    if (str === "") return []
    let temp = [];
    for (let i = 0; i < str.length; i += 2) {
        temp.push(str[i] + str[i + 1])
    }
    if (str.length % 2 !== 0) {
        temp.splice(-1, 1)
        temp.push(str[str.length - 1] + "_")
    }
    return temp;
}