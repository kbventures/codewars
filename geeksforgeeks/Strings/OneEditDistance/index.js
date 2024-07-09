// https://leetcode.com/problems/one-edit-distance/description/

// 161. One Edit Distance
// Given two strings s and t, determine if they are both one edit distance apart.

// Note: 

// There are 3 possiblities to satisify one edit distance apart:

// Insert a character into s to get t
// Delete a character from s to get t
// Replace a character of s to get t
// Example 1:

// Input: s = "ab", t = "acb"
// Output: true
// Explanation: We can insert 'c' into s to get t.
// Example 2:

// Input: s = "cab", t = "ad"
// Output: false
// Explanation: We cannot get t from s by only one step.


// // V1 Brute force
// var oneEditDistance = function(s,t) {
// let diff  = Math.abs(s.length - t.length)

// // If more than one character difference one insert not possible
// if(diff > 1) return false; 

// let editCount = 0; 

// // Replace a character of s to get t
// if(s.length == t.length){
//     for(let i in t){
//         if(s[i] !== t[i]){
//             let temp1 = s.split('')
//             temp1[i] = t[i]
//             let temp2 = temp1.join('')
//             if(temp2 === t){
//                 editCount++
//                 if(editCount ==2) return false; 
//             } 
//         }
//     }
// } 
// // Insert a character into s to get t
// if((s.length+1)== t.length){
//     for(let y =0; y<t.length;y++){
//         let temp1 = s.slice(0,y) + t[y] + s.slice(y); 
//         if(temp1 == t){
//             editCount++
//                 if(editCount ==2) return false; 
//         }
//     }
// }

// // Delete a character from s to get t
// if((s.length-1)== t.length){
//     for (let i = 0; i < s.length; i++) {
//         let newStr = s.slice(0, i) + s.slice(i + 1);
//         if(newStr == t){
//             editCount++
//                 if(editCount ==2) return false; 
//         }
//     }
// }

//     return editCount > 1 
        
// }

// // // Delete Example
// // const result1 = oneEditDistance("abit","abi")
// // console.log(result1)


// // Insert Example
// const result1 = oneEditDistance("abix","abi")
// console.log(result1)

// // V2 Recursion
// const isOneEditDistance = (s, t) => {
//     if (s === t) return false;
  
//     const sLength = s.length;
//     const tLength = t.length;
//     const lengthDiff = Math.abs(sLength - tLength);
  
//     if (lengthDiff > 1) return false;
  
//     if (lengthDiff === 0) {
//       let diffCount = 0;
//       for (let i = 0; i < sLength; i++) {
//         if (s[i] !== t[i]) {
//           if (diffCount > 0) return false;
//           diffCount++;
//         }
//       }
//       return true;
//     }
  
//     if (sLength > tLength) return isOneEditDistance(t, s);
  
//     let sx = 0,
//       tx = 0;
//     let seenDiff = false;
  
//     while (tx < tLength) {
//       if (s[sx] !== t[tx]) {
//         if (seenDiff) return false;
//         seenDiff = true;
//         tx++;
//       } else {
//         sx++;
//         tx++;
//       }
//     }
//     return true;
//   };
  
  // Time Complexity: O(n)
  // Space Complexity: O(1)

  // V3
  const isOneEditDistance = (s, t) => {
    if (s === t) return false;
  
    const sLength = s.length;
    const tLength = t.length;
  
    if (Math.abs(sLength - tLength) > 1) return false;
  
    let sx = 0,
      tx = 0,
      diff = 0;
  
    while (sx < sLength && tx < tLength) {
      if (s[sx] === t[tx]) {
        sx++;
        tx++;
        continue;
      }
  
      if (diff == 0) diff++;
      else return false;
  
      if (sLength === tLength) {
        sx++;
        tx++;
      } else if (sLength > tLength) {
        sx++;
      } else {
        tx++;
      }
    }
  
    return true;
  };
  
  // Time Complexity: O(n)
  // Space Complexity: O(1)