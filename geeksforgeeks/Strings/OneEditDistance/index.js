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

var oneEditDistance = function(s,t) {
let diff  = Math.abs(s.length - t.length)

// If more than one character difference one insert not possible
if(diff > 1) return false; 

let editCount = 0; 

// Replace a character of s to get t
if(s.length == t.length){
    for(let i in t){
        if(s[i] !== t[i]){
            let temp1 = s.split('')
            temp1[i] = t[i]
            let temp2 = temp1.join('')
            if(temp2 === t){
                editCount++
                if(editCount ==2) return false; 
            } 
        }
    }
} 
// Insert a character into s to get t
if((s.length+1)== t.length){
    for(let y =0; y<t.length;y++){
        let temp1 = s.slice(0,y) + t[y] + s.slice(y); 
        console.log("temp1",temp1)
        if(temp1 == t){
            editCount++
                if(editCount ==2) return false; 
        }
    }
}

// Delete a character from s to get t
if((s.length-1)== t.length){
    for (let i = 0; i < s.length; i++) {
        let newStr = s.slice(0, i) + s.slice(i + 1);
        if(newStr == t){
            editCount++
                if(editCount ==2) return false; 
        }
    }
}

    return editCount > 1 
        
}

// // Delete Example
// const result1 = oneEditDistance("abit","abi")
// console.log(result1)


// Insert Example
const result1 = oneEditDistance("abix","abi")
console.log(result1)