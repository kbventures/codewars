// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */

// V1 not working
// var reverseVowels = function(s) {
//     let stringArr = s.split("");
//     let start = 0;
//     let end = stringArr.length -1;
//     let endIndex = stringArr.length -1; 
//     let vowels = ['a','e','i','o','u']
// for (let i = 0; i <= Math.floor((endIndex + 1) / 2); i++) {
//     console.log(stringArr[start],stringArr[end])
//     if(vowels.includes(stringArr[start].toLowerCase()) && vowels.includes(stringArr[end].toLowerCase())){
//         // console.log(stringArr[start],stringArr[end]);
//         let temp = stringArr[start];
//         stringArr[start] = stringArr[end];
//         stringArr[end] = temp;
//         start++;
//         end--;
//         // console.log(stringArr)
//     } else if (!vowels.includes(stringArr[start].toLowerCase())){
//         start++
//         if(!vowels.includes(stringArr[end].toLowerCase())){
//             end--
//         }
//     } else if (!vowels.includes(stringArr[end].toLowerCase())){
//         end--
//     }
//     if(stringArr.length == 2) return stringArr.join("")
// }

// return stringArr.join("") 
// };



// // Expected Marge, let's \"went.\" i awaIt news telegram.
// // Outpust  Marge, let's "went." I await news telegram.

// const result = reverseVowels("Marge, let's \"went.\" I await news telegram.")
// // const result = reverseVowels("leetcode")
// console.log("result",result)


//V2

var reverseVowels = function(s) {
    let stringArr = s.split("");
    let start = 0;
    let end = stringArr.length -1;
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    
    while( start < end){

        if(vowels.includes(stringArr[start]) && vowels.includes(stringArr[end])){
            let temp = stringArr[start];
            stringArr[start]=stringArr[end];
            stringArr[end]= temp;
            start++
            end--
        } else if (!vowels.includes(stringArr[start])){
            start++
        } else if (!vowels.includes(stringArr[end])){
            end--
        }

    }
    return stringArr.join('')
};



// Expected Marge, let's \"went.\" i awaIt news telegram.
// Outpust  Marge, let's "went." I await news telegram.

const result = reverseVowels("Marge, let's \"went.\" I await news telegram.")
// const result = reverseVowels("leetcode")
console.log("result",result)