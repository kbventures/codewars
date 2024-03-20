//https://leetcode.com/problems/reverse-only-letters/

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseOnlyLetters = function(s) {

//     const result = s.split('');
//     const alphabet = [
//         'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//         'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
//         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
//       ];

//       let start = 0;
//       let end = s.length -1; 

//       while(start < end){
//         if(alphabet.includes(result[start]) && alphabet.includes(result[end])){
//         let temp = result[start];
//         result[start]=result[end]
//         result[end] = temp;
//         start++
//         end--
//         } else if(!alphabet.includes(result[start])){
//             start++
//         } else if(!alphabet.includes(result[end]))
//             end--
//       }
//     return result.join('')
// };

// const test0 = reverseOnlyLetters("a-bC-dEf-ghIj")
// console.log(test0)
// // Input: s = "a-bC-dEf-ghIj"
// // Output: "j-Ih-gfE-dCba"

// V3
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {

    const result = s.split('');
    const alphabetRegexx = /[a-zA-Z]/;

      let start = 0;
      let end = s.length -1; 

      while(start < end){
        if(alphabetRegexx.test(result[start]) && alphabetRegexx.test(result[end])){
        let temp = result[start];
        result[start]=result[end]
        result[end] = temp;
        start++
        end--
        } else if(!alphabetRegexx.test(result[start])){
            start++
        } else if(!alphabetRegexx.test(result[end]))
            end--
      }
    return result.join('')
};

const test0 = reverseOnlyLetters("a-bC-dEf-ghIj")
console.log(test0)
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"