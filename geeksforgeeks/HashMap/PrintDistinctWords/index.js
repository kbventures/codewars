// Print all unique words of a String
// Write a function that takes a String as an argument and prints all unique words in it.

// Examples:

// Input : Java is great. Grails is also great
// Output : Java
//          Grails
//          also

// Approach:
// The idea is to use map to keep track of words already occurred. But first, we have to extract all words from a String, as a string may contain many sentences with punctuation marks.
// For extracting words from a String, refer Extracting each word from a String.


// Memorize
function cleanString(inputString) {
    // Use a regular expression to match non-alphabetical characters and spaces
    const cleanedString = inputString.replace(/[^a-zA-Z]+/g, '');

    return cleanedString;
}
// function UniqueWords(str){
//     let array = str.split(" ")
//     console.log(array)
//     let cleanArray = array.filter(ele=> cleanString(ele))
//     console.log(cleanArray)
// }

// V1
function UniqueWords(str){
    let array = str.split(" ")
    let HashMap = {}
    for(const i of array){
        let temp = cleanString(i)
        if(!HashMap[temp]){
            HashMap[temp]=1;
        } else {
            HashMap[temp]++
        }
    }
    return Object.keys(HashMap).filter(e=> {return HashMap[e] == 1});
    
}
const result = UniqueWords("Java is great. Grails is also great"); 
console.log("result", result)




