// Count Distinct ( Unique ) elements in an array
// Given an array arr[] of length N, The task is to count all distinct elements in arr[].

// Examples: 

// Input: arr[] = {10, 20, 20, 10, 30, 10}
// Output: 3
// Explanation: There are three distinct elements 10, 20, and 30.

// Input: arr[] = {10, 20, 20, 10, 20}
// Output: 2


// Naïve Approach:

// Create a count variable and run two loops, one with counter i from 0 to N-1 to traverse arr[] and second with counter j from 0 to i-1 to check if ith element has appeared before. If yes, increment the count. 


// O(n) O(m)

function Distinct(arr){
const HashMap = {}
let result = 0;
for(const i of arr){
    // console.log(i)
    if(!HashMap[i]){
        HashMap[i]=1
        result++
    }
}
    return result;
}


const result = Distinct([10, 20, 20, 10, 30, 10, 40])
console.log(result)