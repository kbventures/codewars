// https://leetcode.com/problems/squares-of-a-sorted-array/

// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// // Brute force
// var sortedSquares = function(nums) {
//    for(let i =0;i<=nums.length-1;i++){
//     nums[i] = nums[i] * nums[i]

// }
// console.log(nums)
//    return nums.sort((a,b)=>a-b);
// };

// const result0 = sortedSquares([-7,-3,2,3,11])

// console.log(result0)


// V2 Two Pointers O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Brute force
// var sortedSquares = function(nums) {
//     let start = 0; 
//     let end =nums.length-1;
//     while(start < end ){
//         let tempStart = nums[start] * nums[start];
//         let tempEnd = nums[end] * nums[end];
//         if(tempEnd > tempStart){
//             nums[end] = tempEnd;
//             end--
//         } else if(tempEnd < tempStart){
//             let temp3 = nums[end]
//             nums[end]=tempStart
//             nums[start]= temp3;
//             end--
//         }
//         console.log(nums)
//     }
//     return nums

//  };
 
//  const result0 = sortedSquares([-7,-3,2,3,11])
 
//  console.log(result0)


 // v3 BANKI!
 // https://leetcode.com/problems/squares-of-a-sorted-array/

// V4 Re-Attemp

var sortedSquares = function(nums) {
    let result = [];
    // Left and right pointer
    let left = 0;
    let right = nums.length - 1;
    // Position to add squared number to A
    let index = nums.length-1;

    // Add the higher number to the array and then decrease the pointer
    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
            index--
        } else {
            result[index] = rightSquare;
            right--;
            index--
        }
    }

    return result;
};