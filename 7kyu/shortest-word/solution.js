//Prep
// Parameter a phrase of words seperated by spaces
// Retuns the lenght of the shortest word
// Example: "hello world" returns 5
// Pseudocode:
// Create array of this string split by spaces
// get the lenght of the first words
// Loop through the remaning of the string and compare to see if the lenght of the word is shorter
// then the current one
// Return shortest lenght number

function findShort(s) {

    let list = s.split(" ")
    let result = list[0].length;

    for (let i = 1; i < list.length; i++) {

        if (result > list[i].length) {
            result = list[i].length
        }
    }
    return result;
}