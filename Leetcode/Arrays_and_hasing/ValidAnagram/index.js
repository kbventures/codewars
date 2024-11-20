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



