// Count all distinct pairs with difference equal to k
// Given an integer array and a positive integer k, count all distinct pairs with differences equal to k. 

// Examples: 

// Input: arr[] = {1, 5, 3, 4, 2}, k = 3
// Output: 2
// There are 2 pairs with difference 3, the pairs are {1, 4} and {5, 2} 

// Input: arr[] = {8, 12, 16, 4, 0, 20}, k = 4
// Output: 5
// There are 5 pairs with difference 4, the pairs are {0, 4}, {4, 8}, 
// {8, 12}, {12, 16} and {16, 20} 

// V1 Two Pointer Version
// function DistPairsDiffEquK(arr,k){

//     let start = 0; 
//     let end = arr.length -1
//     let result =0; 

//     while(start < end){
//         let temp = arr[start] - arr[end]
//         // console.log(temp)
//         if(temp == k || temp == -k){
//             result++
//             console.log(result)
//         }

//         if(start + 1 == end){
//             start++ 
//             end = arr.length -1
//         } else {
//             end--
//         }
//     }
//     // console.log(result)
//     return result; 
// }

// // Output 3
// const result = DistPairsDiffEquK([1,5,3,4,2],3)
// console.log(result)

// V1 HashMap

// Count all distinct pairs with difference equal to k
// Given an integer array and a positive integer k, count all distinct pairs with differences equal to k. 

// Examples: 

// Input: arr[] = {1, 5, 3, 4, 2}, k = 3
// Output: 2
// There are 2 pairs with difference 3, the pairs are {1, 4} and {5, 2} 

// Input: arr[] = {8, 12, 16, 4, 0, 20}, k = 4
// Output: 5
// There are 5 pairs with difference 4, the pairs are {0, 4}, {4, 8}, 
// {8, 12}, {12, 16} and {16, 20} 

// V1 Two Pointer Version
// function DistPairsDiffEquK(arr,k){

//     let start = 0; 
//     let end = arr.length -1
//     let result =0; 

//     while(start < end){
//         let temp = arr[start] - arr[end]
//         // console.log(temp)
//         if(temp == k || temp == -k){
//             result++
//             console.log(result)
//         }

//         if(start + 1 == end){
//             start++ 
//             end = arr.length -1
//         } else {
//             end--
//         }
//     }
//     // console.log(result)
//     return result; 
// }


var MAX = 100000;
function countPairsWithDiffK(arr, n, k)
{
    var count = 0;  // Initialize count
 
    // Initialize empty hashmap.
    var hashmap = Array(MAX).fill(false);
 
    // Insert array elements to hashmap
    for (var i = 0; i < n; i++)
        hashmap[arr[i]] = true;
 
    for (var i = 0; i < n; i++)
    {
        var x = arr[i];
        if (x - k >= 0 && hashmap[x - k])
            count++;
        if (x + k < MAX && hashmap[x + k])
            count++;
        hashmap[x] = false;
    }
    return count;
}