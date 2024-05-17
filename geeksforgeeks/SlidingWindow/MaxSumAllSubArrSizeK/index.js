// https://www.geeksforgeeks.org/window-sliding-technique/
// 1. To find the maximum sum of all subarrays of size K:

// Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

//     Input  : arr[] = {100, 200, 300, 400}, k = 2
//     Output : 700

//     Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
//     Output : 39
//     We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

//     Input  : arr[] = {2, 3}, k = 3
//     Output : Invalid
//     There is no subarray of size 3 as size of whole array is 2.



// V1 Nested Loop O(n2)
// const maxSumAllSubArrK = function(arr, n){

// let max=0;    
// for (let i =0; i<=arr.length-n;i++){
//     let tempSum=0;
//     for(let y = i; y<(i+n);y++){
//         tempSum += arr[y];
//     }
//     if(tempSum > max){
//         max = tempSum; 
//     }
// }

// return max; 
// }

// const result = maxSumAllSubArrK([100,200,300,400],2)
// console.log(result)

// V2 Sliding Window 
const maxSumAllSubArrK = function(arr, n){
    if(arr.length < n) return false;
    let maxSum =0; 

    for(let i =0; i<n;i++){
    maxSum+= arr[i]
    }
    let currSum = maxSum


    for(let i = n; i<arr.length;i++){
        currSum = currSum + arr[i] -arr[i-n]
        if(currSum > maxSum){
            maxSum = currSum; 
        }
    }

    return maxSum
    }
    
    const result = maxSumAllSubArrK([1, 4, 2, 10, 23, 3, 1, 0, 20],4)
    console.log(result)