
// takes in a given array of strings and move any entries containing the letter 'a' to the front
// then move any remaining entries that have over 3 characters to the back
//please preserve the relative order of entries within their given category


// Today I'd like you to write a function that:

myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'] // => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']


function challengeThree(arr) {

    // [ hola, hello ]
    let containsA = arr.filter(e =>
        e.includes('a')
    )

    // [hello, howdy, heyy]
    let threeCharacters = arr.filter(e =>
        !e.includes('a')
    ).filter(e => e.length > 3)

    // [ hi, hef ]
    let remainder = arr.filter(e => !e.includes('a')
    ).filter(e => e.length < 4)

    console.log(containsA)
    console.log(threeCharacters)
    console.log(remainder)

    // return containsA.concat(threeCharacters, remainder)

    return arr.filter(e =>
        e.includes('a')
    ).concat(arr.filter(e => !e.includes('a')
    ).filter(e => e.length < 4), arr.filter(e =>
        !e.includes('a')
    ).filter(e => e.length > 3))
}

console.log(challengeThree(myArr))


// Alternative Solution
// function challengeThree(arr) {
//     return arr
//       .filter((e) => e.includes('a'))
//       .concat(
//         arr.filter((e) => !e.includes('a')).sort((a, b) => a.length - b.length)
//       );
//   }