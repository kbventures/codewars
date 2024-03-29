// https://leetcode.com/problems/valid-palindrome-ii/
// 680. Valid Palindrome II
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

// V1 Brute Force
// var validPalindrome = function(s) {

//     let sArr = s.split("")
//     let start =0;
//     let end = s.length -1; 

//     while(sArr[start] == sArr[end]){
//         // console.log(sArr[start],sArr[end])
//         start++
//         end--
//         if( start == s.length-1 )return true; 

//     }
//     const leftArr = sArr.slice(0,start).concat(sArr.slice(start+1))
//     const rightArr = sArr.slice(0, end).concat(sArr.slice(end + 1))
//     start = 0;
//     end = rightArr.length -1;

//     while(rightArr[start] == rightArr[end]){
//         start++
//         end--
//         if( start == s.length-1 )return true; 

//     }

//     start = 0;
//     end = leftArr.length -1; 

//     while(leftArr[start] == leftArr[end]){
//         // console.log(sArr[start],sArr[end])
//         start++
//         end--
//         if( start == s.length-1 )return true; 

//     }





//     return false; 
// };

// const result = validPalindrome("abcdefghhgfedcwba")
// console.log(result)


// V2 Two Pointers

/**
 * @param {string} s
 * @return {boolean}
 */


// var validPalindrome = function(s) {

//     let sArr = s.split("")
//     let start =0;
//     let end = s.length -1; 

//     while(sArr[start] == sArr[end]){
//         start++
//         end--
//         if( start >= end)return true; 

//     }

//     let startBreak = start;
//     let endBreak = end;

//     // Left Check
//     while(sArr[start + 1] == sArr[end]){
//         start++
//         end--
//         if( start >= end)return true; 
//     }
//     // Right Check 
//     while(sArr[startBreak] == sArr[endBreak-1]){
//         startBreak++
//         endBreak--
//         if( startBreak >= endBreak)return true; 
//     }

//     return false;
// };

// const result = validPalindrome("cbbcc")
// console.log(result)

// V2 Two pointer Refactor

var validPalindrome = function(s) {

    let start =0;
    let end = s.length -1; 

    while(s[start] == s[end]){
        start++
        end--
        if( start >= end)return true; 

    }

    let startBreak = start;
    let endBreak = end;

    // Left Check
    while(s[start + 1] == s[end]){
        start++
        end--
        if( start >= end)return true; 
    }
    // Right Check 
    while(s[startBreak] == s[endBreak-1]){
        startBreak++
        endBreak--
        if( startBreak >= endBreak)return true; 
    }

    return false;
};

const result = validPalindrome("cbbcc")
console.log(result)





