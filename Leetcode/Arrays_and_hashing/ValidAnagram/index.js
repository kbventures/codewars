// https://leetcode.com/problems/valid-anagram/description/



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 // V0
// var isAnagram = function(s, t) {
//     return s.split("").sort().join("") == t.split("").sort().join("")
// };

// V1
// var isAnagram = function(s, t) {
// let hashS = {}
// let hashT = {}
//     if(s.length !== t.length) return false; 
//     for(let i of s){
//         hashS[i] ? hashS[i]++: hashS[i] =1; 
//     }

//     for(let y of t){
//     hashT[y] ? hashT[y]++: hashT[y] =1; 
//     }

//     for(let z in hashS){
//         if(hashS[z] !== hashT[z]) return false; 
//     }

//     return true; 
// };


// V2
// var isAnagram = function(s, t) {
//     let hashS = {}
//     let hashT = {}
//         if(s.length !== t.length) return false; 
//         for(let i of s){
//             hashS[i] ? hashS[i]++: hashS[i] =1; 
//         }
    
//         for(let y of t){
//         hashT[y] ? hashT[y]++: hashT[y] =1; 
//         }
    
//         for(let z in hashS){
//             if(hashS[z] !== hashT[z]) return false; 
//         }
    
//         return true; 
//     };



// V3

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let charCount = new Array(26).fill(0); // Array to store frequency of characters
    
    for (let i = 0; i < s.length; i++) {
        // Increment count for string s, decrement for string t
        charCount[s.charCodeAt(i) - 97]++; // 'a' -> 97
        charCount[t.charCodeAt(i) - 97]--;
    }
    
    // Check if all frequencies are zero
    for (let count of charCount) {
        if (count !== 0) return false;
    }
    
    return true;
};

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false; 
    // Pseudocode
    // Create array that is the size of the alphabet and fill it with 0 values
    let alphabetArray = new Array(26).fill(0)

    // Iterate values through s & t simultaneously convert their respectie letter to charcode and also convert to alphabet position. increment and decrement +1 -1 respective for s & t at their respetice alphabet position

    for(let i in s){
        alphabetArray[t.charCodeAt(i) -97]++
        alphabetArray[s.charCodeAt(i)-97]--
    }

    // if any value is not equal to 0 return false; 
    for(let y of alphabetArray){
        if(y !== 0) return false; 
    }
    return true; 
};




// Comparison V2 & V3:

// Time Complexity:
// Optimized: O(n) (one pass to count, one to check).
// Original: O(n + m) (two passes for counting, one for comparison).


// Space Complexity:
// Optimized: O(1) (fixed-size array).
// Original: O(n) (hash maps).

// Simplicity:
// Optimized: Cleaner and simpler.
// Original: More verbose with hash maps.


// The `- 97` in the code:

// ```js
// charCount[s.charCodeAt(i) - 97]++;
// ```

// is used to map characters ('a' to 'z') to array indices. Here's why:

// 1. **ASCII Value**: The `charCodeAt(i)` method returns the ASCII value of a character.
//    - The ASCII value for 'a' is **97**, 'b' is **98**, and so on.
   
// 2. **Zero-based Indexing**: Subtracting **97** normalizes the ASCII value to a zero-based index for the alphabet.
//    - `'a'` (ASCII 97) becomes index **0**, `'b'` (ASCII 98) becomes index **1**, and so on, up to `'z'` becoming index **25**.

// This allows the code to use an array of size 26 (one slot per letter) to track frequencies efficiently.



