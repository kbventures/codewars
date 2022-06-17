// PREP
//
// Parameter string of lower case letters
//
// Return a integer which represents consecutive vowels a e i o u

// Pseudo Code
// Create Counter for consecutive count
// Create array of vowels counter
// Split string into single elements, loop through array and when letter equals a
// Increase counter by 1 move vowel counter to the next letter 
// If next letter true when loooping increase counter by one
// If a is the next letter then restart vowel counter and increaser counter by 1
function getTheVowels(word) {

    let vowelCounter = 0
    let vowelArray = ['a', 'e', 'i', 'o', 'u']
    let counter = 0;
    word.split('').forEach((e, i) => {

        if (e === vowelArray[vowelCounter]) {
            if (e === 'u') {
                counter++
                vowelCounter = 0;
            } else {
                counter++
                vowelCounter++
            }
        }
    })
    console.log(counter)
    return counter;
}
  // Example
  // getTheVowels('aeiou') returns 5
  // getTheVowels('aavaei') returns 5