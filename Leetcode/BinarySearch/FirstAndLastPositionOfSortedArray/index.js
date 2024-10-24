// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = 
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let left =0;
    let right = nums.le        
    let middle = Math.floor(left + right / 2); 
    let targetRange = [-1,-1]
    // Find Initial target
    while(left <= right){
        if(nums[middle] === target){
            targetRange = [middle, middle]; 
            break; 
        } else if (middle < target){
            left = middle +1
        } else {
            right = middle -1;
        }
        let middle = Math.floor(left + right / 2); 
    }
    // Not found
    if (targetRangep[0] == -1 && targetRange[1] == -1 )return targetRange 

    // Look right

    left = middle

    // condition needs to be set
    // while(true){
    //     if(nums[right] =)
    // }


    // Look for left

    

};


const result0 = searchRange([5,6,7,8,10],6)

const result1 = searchRange([5,7,7,8,8,10], 7)
// Found 7 at [1,1]
// Left is 0 and right is 2

// Check right 
// the range range would be at most middle to right; 

// Check left
// the range woudl be at most starting at left to current middle

const result2 = searchRange([5,7,7,8, 8 ,8,8,8,10], 8)


const result3 = searchRange([5,7,7,8,8,8,8,8,10], 5)