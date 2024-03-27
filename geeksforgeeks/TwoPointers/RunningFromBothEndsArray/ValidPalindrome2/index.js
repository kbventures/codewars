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

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let splitS = s.split("")
    let start =0;
    let end = splitS.length -1;
    let counter =0; 

    while(start <= end){
        if(splitS[start] !== splitS[end]){
            if(counter !== 1 || (start + 1 == end) || (start + 2 == end)){ 
                return true
            }
            console.log(splitS[start],splitS[end])
            if (splitS[start + 1] == splitS[end]){
                start++
                counter++
                if(counter ==1) return false; 
            } else if( splitS[start] == splitS[end-1]){
                end--
                counter++
                if(counter ==1) return false; 
            } else {
                console.log('is not supposed to happen 2')
                return false;
            }
            }
        start++
        end--
    }
    return true;
    
};

const result = validPalindrome("abc")
console.log(result)

// FAILED TO DO IT
// https://nileshsaini09.medium.com/valid-palindrome-ii-b3660a1931e5
// Do it again after studying answers. 