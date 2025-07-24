// Brute force
// Time complexity is O(n) and space comlexity O(n)
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedData= ""

        if(strs.length ==0){
            return ""
        }

        for(let i = 0; i< strs.length;i++){
            let temp = strs[i].length + "#" +strs[i];
            encodedData = encodedData + temp; 
        }
        // console.log(encodedData)
        return encodedData
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
    if(str.length == 0) return []

    let currNumberStr = ""
    let i = 0; 
    let result = []

    // Traverse delimieted words
    while(i < str.length){
        // Add assemble current length
        if(str[i] !== "#"){
            currNumberStr = currNumberStr + str[i]
            i++
            continue; 
        } 
            // Length of the word
            let tempWrdNum = Number(currNumberStr)
            let start = i + 1; 
            let end = i + tempWrdNum + 1; 
            let tempWord = str.slice(start,end)
            result.push(tempWord)
            i = end; 
            currNumberStr = ""
    }
    return result; 
    }

}