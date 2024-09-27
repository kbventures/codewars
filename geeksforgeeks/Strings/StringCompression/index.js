https://leetcode.com/problems/string-compression/description/

// Here's how the algorithm works:

// The space complexity needs to be constant; therefore, we cannot use any additional arrays or strings for our computations.
// The challenge is to edit the array in place since we aren't allowed to return a separate compressed string but instead must modify the chars array directly.

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s =""
    if(chars.length === 0){
        return chars
    } else if (chars.length ===1){
        s+=chars[0]
        return chars.length;
    }
    
    const compressionMap = new Map()

// We iterate over the provided array, chars.
// For each unique character, we find the number of times it repeats consecutively.

    for( c of chars){
        if(compressionMap.has(c)){
            compressionMap.set(c, compressionMap.get(c) + 1)
        } else {
            compressionMap.set(c,1)
        }
    }    

    // We then overwrite the original chars array with the character followed by the number of occurrences if more than one.
    let j =0;
    for(c of compressionMap){
        // console.log(c)
     if(c[1]===1){
        s+= c[0]
     } else {
        s = s + c[0] + c[1]
     }
    }
    // console.log("current s:", s)

    for(c in s){
        console.log(c)
        chars[c] = s[c]
    }
    chars.length = s.length;
    console.log("final chars",chars)

    // We have to return the length of the array after the modifications.
    // console.log("chars result",chars)
    return chars.length;
};

// const result = compress(['a','a','b','b','c','c','c'])
const result = compress(["a","a","a","b","b","a","a"])
// ["a","3","b","2","a","2"]



console.log(result)



// Expected
// ["a","b","1","2"]