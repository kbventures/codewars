//Today you'll need to create a function that swaps each letter of the alphabet for its opposite. 
//A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

// Examples:

// 'A'  // first letter of the alphabet, uppercase
// 'z'  // last letter of the alphabet, lowercase

// 'p'  // 16th letter of the alphabet, lowercase
// 'K'  // 16th letter from *end* of alphabet, uppercase

// let test = 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// // function replaces letters with opposites
// 'Example: 0 number or punctuation changes'


function swap(str) {
    return [...str].map(e => {
        /[a-z]/i.test(e) ? x.charCodeAt() : x
    }).map(e => {
        if (typeof x === number) {
            if (e < 97) {
                return String.fromCharCode(26 - (e - 65) + 96)
            } else {
                return String.fromCharCode(26 - (e - 97) + 64)
            }
        }
        return e;
    }).join('')
}


console.log(
    swap('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'),
    'Example: 0 number or punctuation changes'
);

