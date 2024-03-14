// https://www.geeksforgeeks.org/minimum-insertions-to-form-a-palindrome-with-permutations-allowed/


// Minimum insertions to form a palindrome with permutations allowed
// Given a string of lowercase letters. Find minimum characters to be inserted in the string so that it can become palindrome. We can change the positions of characters in the string.

// Examples: 

// Input : geeksforgeeks
// Output : 2
// geeksforgeeks can be changed as:
// geeksroforskeeg
// geeksorfroskeeg
// and many more

// Input : aabbc
// Output : 0
// aabbc can be changed as:
// abcba
// bacab

// V1
function MinChangePalin(str){
    let strLength = str.length;
    let HashMap = {}
    let oddCount = 0; 
    for(let i of str){
        if(!HashMap[i]){
            HashMap[i]=1;
        } else {
            HashMap[i]++
        }
    }
    for(const z of Object.values(HashMap)){
        if(z % 2 !== 0){
            oddCount++
        }
    }
    return strLength % 2 !== 0 ? oddCount -1 : oddCount
}


// const result = MinChangePalin("geeksforgeeks")
const result = MinChangePalin("aabbc")
console.log(result)



