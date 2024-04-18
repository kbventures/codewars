// https://leetcode.com/problems/rotate-string/description/

// 796. Rotate String
// Easy
// Topics
// Companies
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
 

// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

// V1 Brute Force
// var rotateString = function(s, goal) {
//     if(s.length !== goal.length) return false; 

//     let stringArr = s.split("")
//     console.log("start",stringArr)
//     for(let i =0; i <= stringArr.length;i++){

//         const firstItem = stringArr.shift()
//         stringArr.push(firstItem)

//         console.log("shift", stringArr)

//         if(stringArr.join('') == goal) return true;
//     }

//     return false; 
    
// };

// const result0 = rotateString("abcde","abced");

// V2 Substring and includes
// var rotateString = function(s, goal) {
   
//     for(let i =0; i < goal.length;i++){  
//         s = (s.substring(1) + s.substring(0,1))
//         console.log(s)
//         if(s.includes(goal)) return true; 
//  }

//     return false; 
    
// };

// const result0 = rotateString("abcde","abced");

// V3 God mode
 // Check if lengths are different
 if (s.length !== goal.length) {
    return false;
}

// Concatenate s with itself
const concatenated = s + s;

// Check if goal is a substring of concatenated
return concatenated.includes(goal);