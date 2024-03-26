// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// V1
/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     function removeNonLetters(str) {
//         return str.replace(/[^a-zA-Z0-9]/g, '');
//     }
//     let cleanRegexx = removeNonLetters(s)
//     let start =0;
//     let end = cleanRegexx.length -1
//     while(start < end){
//         console.log("is working")
//         if(cleanRegexx[start].toLowerCase() !== cleanRegexx[end].toLowerCase()){
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// };



// const result0 = isPalindrome("A man, a plan, a canal: Panama")
// console.log(result0)

// V2 Two Pointers
var isPalindrome = function(s) {
    if(s.length == 1) return true;

    function  nonAlphaNum(char){
        return /[^a-zA-Z0-9]/.test(char)
    }
    let start = 0;
    let end = s.length-1;
    while(start <= end){
        console.log(s[start].toLocaleLowerCase(),s[end].toLowerCase(), start, end)
        if(nonAlphaNum(s[start] &&  nonAlphaNum(s[end]))){
            start++
            end--
        } else if(nonAlphaNum(s[start])){
            start ++
        } else if(nonAlphaNum(s[end])){
            end--
        } else {
            if(s[start].toLowerCase() !== s[end].toLowerCase()){
                return false;
            };
            start++
            end--
        }
    }

    return true
};



const result0 = isPalindrome("A man, a plan, a canal: Panama")
console.log(result0)