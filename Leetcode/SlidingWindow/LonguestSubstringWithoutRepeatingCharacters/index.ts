// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */

// V0 - needs work
var lengthOfLongestSubstring = function(s:string):number {

    // Edge case lenght of one
    if(s.length == 1) return 1
let currStr = ""
let currStrCount=0; 
let maxStr = 0; 
let newSet = {};
for(let one of s){
    console.log("one",one)
    console.log("currStr",currStr)
    console.log("maxStr",maxStr)
    console.log("newSet",newSet)
    console.log("******")
    if(newSet[one]){
        // Reset
        newSet = {}
        maxStr = Math.max(currStr.length, maxStr)
        currStr = one;
        newSet[one]= "exists"; 
        currStrCount=0; 

    } else {
        // add 
        newSet[one]= "exists"; 
        currStr += one; 
        currStrCount++
    }
    console.log("one",one)
    console.log("currStr",currStr)
    console.log("maxStr",maxStr)
    console.log("newSet",newSet)
    console.log("******")
}
    console.log("end")
    console.log("currStr",currStr)
    console.log("maxStr",maxStr)
    console.log("newSet",newSet)
    console.log("******")

return Math.max(maxStr,currStrCount); 
};


// Sliding Window


var lengthOfLongestSubstring = function(s:string):number {
    let maxStrCount =1;
    let hash = {}
    hash[s[0]]=s[0];
    let i =0;
    let y =1; 
    // console.log(hash)
    while(y < s.length){
    if(hash[s[y]]){
    delete hash[s[y]]
    // hash[s[y]] = s[y]
    i++
    } else {
        hash[s[y]]=s[y]
        maxStrCount = Math.max(maxStrCount, (y- i + 1) )
        // console.log(maxStrCount)
        y++
    }
    
    console.log(hash)
    
    }
    
    return maxStrCount
    };
    
// Solution    
    var lengthOfLongestSubstring = function(s: string): number {
        let maxStrCount = 0;
        let hash: Record<string, boolean> = {};
        let i = 0; // Start of the sliding window
        let y = 0; // End of the sliding window
    
        while (y < s.length) {
            if (hash[s[y]]) {
                // Remove the leftmost character and shrink the window
                delete hash[s[i]];
                i++;
            } else {
                // Add the current character to the hash
                hash[s[y]] = true;
                // Update the max length
                maxStrCount = Math.max(maxStrCount, y - i + 1);
                y++;
            }
        }
    
        return maxStrCount;
    };
    

    // Succesful Review

    function lengthOfLongestSubstring(s: string): number {
        if(s.length == 0) return 0; 
        let newSet = new Set()
        let i =0;
        let y =0;
        let maxStrCount = 1; 
    
        while(y<s.length){
            if(newSet.has(s[y])){
                newSet.delete(s[i])
                i++
            } else {
                newSet.add(s[y])
                maxStrCount = Math.max(maxStrCount, (y-i+1))
                y++
            }
        } 
        return maxStrCount
    };