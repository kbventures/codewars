// PREP
//
// Parameter is a string
// Returns a the phrase as an hash tag. In other words all the words are not connected without spaces, the first letter of eveyr word is upper case and there is an #
// in front of the conneted string.  Empty strings return false and strings that are longer that 140 characters including # return false
// Example " the    world   " returns '#TheWorld'
// Pseudcode code
// First we must test to see if its an empty string.  Second we removed the empty spaces on the outside of the string.  Third with split this phrase by spaces and
// we filter out the spaces to create an array with only contains the words.  We reduce this array to a single string where the first letter of every word is in upper case and we join
// all these words into a single string.
// If this new string is greater than 139 charactesr we return false, if not we return this string and add "#" in front. 

function generateHashtag(str) {
    if (str.trim() === '') return false;
    let result = str.trim().split(' ').filter(e => e.length !== 0).reduce((acc, e) => {
        return acc + e[0].toUpperCase() + e.slice(1)
    }, "")
    if (result.length > 139) return false;
    return "#" + result;
}

// Codewars solutions
// function generateHashtag(str) {
//     return str.length > 140 || str === '' ? false :
//         '#' + str.split(' ').map(capitalize).join('');
// }

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }