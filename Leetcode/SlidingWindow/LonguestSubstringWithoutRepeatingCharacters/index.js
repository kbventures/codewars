// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

        // Edge case lenght of one
        if(s.length == 1) return 1
    let currStr = ""
    let maxStr = 0; 
    let newSet = {};
    for(one of s){
        console.log("one",one)
        console.log("currStr",currStr)
        console.log("maxStr",maxStr)
        console.log("newSet",newSet)
        console.log("******")
        if(newSet[one]){
            // Reset
            newSet = {}
            if(currStr.length > maxStr){
                maxStr = currStr.length; 
            }
            currStr = "";
            currStr += one;
            newSet[one]= "exists"; 
 
        } else {
            // add 
            newSet[one]= "exists"; 
            currStr += one; 
        }
        console.log("one",one)
        console.log("currStr",currStr)
        console.log("maxStr",maxStr)
        console.log("newSet",newSet)
        console.log("******")
    }
        console.log("end")
        console.log("one",one)
        console.log("currStr",currStr)
        console.log("maxStr",maxStr)
        console.log("newSet",newSet)
        console.log("******")

    return maxStr; 
};