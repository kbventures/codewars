// PREP
//
// Parameters: sentence with lower and upper case letters
// Returns setence transformed. All odd index letters are upper case and odd index are lower case.


function spongeMeme(sentence) {
    // Pseudo Code 
    // split the sentece in an array for each element
    // map split elements in new array
    // elements returned by map will be lower cased if index isn't odd and upper case if odd

    return sentence.split('').map((e, i) => i % 2 !== 0 ? e.toLowerCase() : e.toUpperCase()).join('')
}


    //spongeMeme('stop') returns 'StOp'