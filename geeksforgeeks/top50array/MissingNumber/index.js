// Missing number in array
// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

// Example 1:

// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4
// Example 2:

// Input:
// N = 10
// A[] = {6,1,2,8,3,4,7,10,5}
// Output: 9

// Your Task :
// You don't need to read input or print anything. Complete the function MissingNumber() that takes array and N as input  parameters and returns the value of the missing number.


// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)


// Constraints:
// 1 ≤ N ≤ 106
// 1 ≤ A[i] ≤ 106

// V1 O(n log n)
// function MissingNumber(arr){
//     if(arr.length == 1) return arr;
//     arr.sort()
//     console.log(arr)
//     let missingEl; 
//     for(let i =0; i<arr.length-1; i++){
//         missingEl = (arr[i] + 1)
//         if(arr[i+1] !== missingEl) return missingEl
//     } 
// }

// const result = MissingNumber([1,2,3,0,-1,5])
// const result1 = MissingNumber([1,2,3,4])

// console.log(result)

//V2 O(n) O(1) Using Map

// function findMissingNumber(arr) { 
//     const n = arr.length + 1; 
//     const sumOfFirstN = (n * (n + 1)) / 2; 
  
//     let sumOfArray = 0; 
//     for(let i = 0; i < n - 1; i++) { 
//         sumOfArray = sumOfArray + arr[i]; 
//     } 
  
//     let missingNumber = sumOfFirstN - sumOfArray; 
  
//     return missingNumber; 
// } 

// const result = findMissingNumber([1, 2, 3, 5]);


// console.log(result); 


// V3 Use Hashmap because you will not remember the formula



function findMissingNumber(arr) { 
    let hashMap = {}
    
    for(let n in arr){
        hashMap[arr[n]] = arr[n]
    }
    console.log(hashMap)
    let temp = 1; 

    for(const key in hashMap){
        if(!(temp in hashMap)){
            return temp
        }
        temp++
    }

    return temp; 

} 

const result = findMissingNumber([1, 2, 3, 5]);


console.log(result); 