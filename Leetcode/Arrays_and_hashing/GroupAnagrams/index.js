// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Hedge chase: One Character
    if(strs.length == 0) return [[...strs]]
    let newHash = {}
    for(let i=0;i<strs.length;i++){
        let temp = strs[i].split('').sort().join('')
        if(newHash[temp]){
            newHash[temp] = [...newHash[temp], strs[i]]
        } else {
            newHash[temp] = [strs[i]]
        }
    }
    let result = []
    for(let z in newHash){
        // console.log('testing',newHash[z])
        // result = [...result,...newHash[z]]
        // console.log("result first",result)
        let temp = newHash[z]
        result.push(temp);
    }
    // result [ 'eat', 'tea', 'ate', 'tan', 'nat', 'bat' ]
    return result; 
};

// v1 Improved 

var groupAnagrams = function(strs) {
    // Hedge chase: One Character
    if(strs.length == 0 || strs.length == 1) return [[...strs]]
    let newHash = {}
    for(let i=0;i<strs.length;i++){
        let temp = strs[i].split('').sort().join('')
        if(newHash[temp]){
            newHash[temp].push(strs[i])
        } else {
            newHash[temp] = [strs[i]]
        }
    }    
    return Object.values(newHash)
};

// V2 Map

var groupAnagrams = function(strs) {
    // Hedge chase: One Character
    if(strs.length == 0 || strs.length == 1) return [[...strs]]
    let newMap = new Map()
    for(let i=0;i<strs.length;i++){
        let temp = strs[i].split('').sort().join('')
        if(newMap.has(temp)){
            newMap.get(temp).push(strs[i])
        } else {
            newMap.set(temp, [strs[i]]);
        }
    }    
    return Array.from(newMap.values())
};


// v3 Optimal solution

var groupAnagrams = function(strs) {
    if (strs.length === 0) return [];
    
    let newMap = new Map();
    
    for (let str of strs) {
        // Create a frequency count array for each string
        let count = Array(26).fill(0); // Assuming only lowercase English letters
        for (let char of str) {
            count[char.charCodeAt(0) - 97]++; // Map 'a' to 0, 'b' to 1, etc.
        }
        
        // Convert count array to a string to use as a unique key
        // The # in count.join('#') ensures the joined string is unambiguous, preventing cases where counts like [1, 10] (joined as 110) look the same as [11, 0].
        let key = count.join('#');
        
        // Group by key
        if (newMap.has(key)) {
            newMap.get(key).push(str);
        } else {
            newMap.set(key, [str]);
        }
    }
    console.log(newMap)
    // Return all grouped anagrams
    return Array.from(newMap.values())
};
