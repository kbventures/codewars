//https://leetcode.com/problems/palindrome-permutation/description/
// 266. Palindrome Permutation
// Given a string, determine if a permutation of the string could form a palindrome.

// Example 1:

// Input: "code"
// Output: false
// Example 2:

// Input: "aab"
// Output: true
// Example 3:

// Input: "carerac"
// Output: true


/**
 * @param {number[]} prices
 * @return {number}
 */

// For a string to have a palindrome permutation, it must satisfy certain conditions based on the frequency of its characters:

// Even-Length Strings: All characters must occur an even number of times.
// Odd-Length Strings: All characters except one must occur an even number of times (one character can occur an odd number of times).


// V1 Hash Object
var palindromePermutation = function(str) {
    let oddOrEven = str.length % 2;  

    let obj = {}

    for (let i of str) {
        obj[i] ? obj[i]++ : obj[i] = 1
    }

    if (oddOrEven == 0) {
        // All characters must occur an even number of times
        for (let z in obj) {
            if (obj[z] % 2 !== 0) return false; 
        }
    } else {
        // At most one character can occur an odd number of times
        let oddCount = 0;
        for (let z in obj) {
            if (obj[z] % 2 !== 0) oddCount++;
            if (oddCount > 1) return false; 
        }
    }

    return true; 
};



const res = palindromePermutation("aab");

console.log("result", res);
