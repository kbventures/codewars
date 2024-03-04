// Given a string str, the task is to find the frequency of each character of a string using an unordered_map in C++ STL.

// Examples: 

// Input: str = “geeksforgeeks” 
// Output: 
// r 1 
// e 4 
// s 2 
// g 2 
// k 2 
// f 1 
// o 1

// Input: str = “programming” 
// Output: 
// n 1 
// i 1 
// p 1 
// o 1 
// r 2 
// a 1 
// g 2 
// m 2 

function FreqCharStr(str){
let HashMap = {}

for(const index of str){
    if(!HashMap[index]){
        HashMap[index] = 1; 
    } else {
        HashMap[index]++
    }
}

return HashMap; 
}

const result = FreqCharStr("how often am I")
console.log(result)