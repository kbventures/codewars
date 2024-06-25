// https://leetcode.com/problems/two-sum/description/
// 1. Two Sum
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // V1
// var twoSum = function(nums, target) {

//     for(let i = 0; i<nums.length;i++){
//         for( let y = i+1; y<nums.length;y++){
//             let temp = nums[i] + nums[y]
//             if(temp == target) return [i,y]
//             }
//     }   
// };

// V2 Two Pointers
// var twoSum = function(nums, target) {

//     let lPointer =0; 
//     let rPointer = nums.length-1

//     while(lPointer <= rPointer){
//         let temp = nums[lPointer] + nums[rPointer]
//         if(temp == target) return [lPointer,rPointer]
//         rPointer--
//         if(lPointer == rPointer){
//             lPointer++
//             rPointer = nums.length -1; 
//         }
//     }
// };


// V3 Map?
const twoSum = (nums, target) => {
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      let number = nums[i];
      let complement = target - number;
      let complementIndex = map.get(complement);
  
      if (complementIndex !== undefined) {
        return [i, complementIndex];
      }
  
      map.set(number, i);
    }
  };
  
  // Time Complexity: O(n)
  // Space Complexity: O(n)

const result = twoSum([3,2,4],6)
console.log(result)