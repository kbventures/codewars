// https://leetcode.com/problems/sort-array-by-parity/description/

// 905. Sort Array By Parity
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// V1 Twoter pointers
// var sortArrayByParity = function(nums) {
//     let index1 = 0;
//     let index2 = 0;

//     while(index1 < nums.length){
//         if(nums[index1] % 2 === 1){
//             index1++
//         } else {
//             let temp = nums[index2];
//             nums[index2]= nums[index1];
//             nums[index1] = temp
//             index1++
//             index2++
//         }
//     }
//     return nums
// };

// // Output
// // [3,1,2,4]
// // Expected
// // [2,4,3,1]

// const result0 = sortArrayByParity([3,1,2,4])
// console.log(result0)


// V2
var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length -1;

    while(left < right){
       
    }
    return nums
};

// Output
// [3,1,2,4]
// Expected
// [2,4,3,1]

const result0 = sortArrayByParity([3,1,2,4])
console.log(result0)
