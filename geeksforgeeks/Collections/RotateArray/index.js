// https://leetcode.com/problems/rotate-array/description/
// 189. Rotate Array
// Medium
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // V1 Brute Force
//  var rotate = function(nums, k) {
//    if (k === 0) return nums;
//    k = k % nums.length; // Handle cases where k is greater than the array length
//    temp = [...nums.slice(-k), ...nums.slice(0, -k)];
//    for(let i = 0; i< temp.length;i++){
//        nums[i]= temp[i]
//    }
// };



// V2 Two pointers
// Helper function to reverse a portion of the array
const reverse = (nums, left, right) => {
    while (left < right) {
      // Swap elements at the left and right indices
      [nums[left], nums[right]] = [nums[right], nums[left]];
      // Move the left pointer to the right
      left++;
      // Move the right pointer to the left
      right--;
    }
  };
  
  // Main function to rotate the array
  const rotate = (nums, k) => {
    // Calculate the effective number of rotations needed
    let temp = k % nums.length;
  
    // Step 1: Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    // Step 2: Reverse the first 'temp' elements
    reverse(nums, 0, temp - 1);
    // Step 3: Reverse the remaining elements from 'temp' to the end
    reverse(nums, temp, nums.length - 1);
  };
  
  // Example usage
  let nums = [1, 2, 3, 4, 5];
  let k = 2;
  
  // Rotates the array nums to the right by k steps
  rotate(nums, k);
  console.log(nums); // Output: [4, 5, 1, 2, 3]
  




