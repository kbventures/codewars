https://leetcode.com/problems/string-compression/description/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = "";
    if(chars.length === 0){
        return chars
    } else if (chars.length ===1){
        return [chars[0],"1"]; 
    }
    
    const compressionMap = new Map()

    for( c of chars){
        if(compressionMap.has(c)){
            compressionMap.set(c, compressionMap.get(c) + 1)
        } else {
            compressionMap.set(c,1)
        }
    }    
    let finalResult =[]

    const [firstKey, firstValue] = compressionMap.entries().next().value;
    if(firstValue > 1){
    for( c of compressionMap){
        finalResult.push(c[0], String(c[1]))
    }
    } else {
        for( c of compressionMap){
            finalResult.push(c[0])
        }        
        for( c of compressionMap){
            finalResult.push(String(c[1]))
        }
    }
    
    // Works but s has to be returned
    for(let i=0;i<=finalResult.length-1;i++){
        chars[i] = finalResult[i]
    }
    return chars
};

const result = compress(['a','a','b','b','c','c'])
console.log(result)