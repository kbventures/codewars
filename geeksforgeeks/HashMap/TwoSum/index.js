// Check if pair with given Sum exists in Array (Two Sum)
// Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 

// Examples: 

// Input: arr[] = {0, -1, 2, -3, 1}, x= -2
// Output: Yes
// Explanation:  If we calculate the sum of the output,1 + (-3) = -2
// Input: arr[] = {1, -2, 1, 0, 5}, x = 0
// Output: No


// Naive Approach: The basic approach to solve this problem is by nested traversal.

// Traverse the array using a loop
// For each element:
// Check if there exists another in the array with sum as x
// Return true if yes, else continue
// If no such pair is found, return false.


// V1 Naive version: Nested Traversal
// T O(n^2) S(1)

// function TwoSum(arr,sum){

//     // Looking for true
//     for(let i = 0; i< arr.length -1;i++){
//         for(let y = i+1; y<= arr.length-1;y++){
//             if((arr[i]+arr[y]) == sum) return true; 
//         }
//     }
    
//     // False by default 
//     return false;
// }

// const result = TwoSum([0, -1, 2, -3, 1], -2)

// // Is true?
// console.log(result)

// V2 HashSet

// function TwoSum(arr,sum){

// let HashMap={}
//     for(const i of arr){
//         if(!HashMap[i]){
//             HashMap[i] = i;
//         }
//     }
//     console.log(HashMap)

//     // False by default 
//     return false;
// }

// const result = TwoSum([0, -1, 2, -3, 1], -2)

// // Is true?
// console.log(result)

// V3 Two Pointers


function TwoSum(arr,sum){
let start =0;
let end = 1

while(start< arr.length){
    let temp = arr[start] + arr[end];
    if(temp == sum) {
        return true
    } else if (end != arr.length -1) {
        end++
    } else {
        start++
        end = start + 1
    }
    }
        // False by default 
        return false;
    }
    
    const result = TwoSum([0, -1, 2, -3, 1], -2)
    
    // Is true?
    console.log(result)