// https://leetcode.com/contest/biweekly-contest-143/problems/maximum-frequency-of-an-element-after-performing-operations-i/description/

// Q2. Maximum Frequency of an Element After Performing Operations I

// You are given an integer array nums and two integers k and numOperations.

// You must perform an operation numOperations times on nums, where in each operation you:

// Select an index i that was not selected in any previous operations.
// Add an integer in the range [-k, k] to nums[i].
// Return the maximum possible frequency of any element in nums after performing the operations.

// The frequency of an element x is the number of times it occurs in the array.

 

// Example 1:

// Input: nums = [1,4,5], k = 1, numOperations = 2

// Output: 2

// Explanation:

// We can achieve a maximum frequency of two by:

// Adding 0 to nums[1]. nums becomes [1, 4, 5].
// Adding -1 to nums[2]. nums becomes [1, 4, 4].
// Example 2:

// Input: nums = [5,11,20,20], k = 5, numOperations = 1

// Output: 2

// Explanation:

// We can achieve a maximum frequency of two by:

// Adding 0 to nums[1].
 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// 0 <= k <= 105
// 0 <= numOperations <= nums.length



/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
    
};



// Brute Force Solution

function maxFrequency(nums, k, numOperations) {
    let maxFreq = 0;

    // Try every possible target number from 1 to the max number in nums
    for (let target = 1; target <= Math.max(...nums); target++) {
        let operationsUsed = 0;
        let freq = 0;

        // Count how many numbers can be turned into `target`
        for (let i = 0; i < nums.length; i++) {
            let diff = Math.abs(nums[i] - target);

            // If the difference is within the allowed operations range
            if (diff <= k) {
                operationsUsed += diff;
                if (operationsUsed <= numOperations) {
                    freq++;
                }
            }
        }

        maxFreq = Math.max(maxFreq, freq);
    }

    return maxFreq;
}

// Example 1
console.log(maxFrequency([1, 4, 5], 1, 2)); // Output: 2

// Example 2
console.log(maxFrequency([5, 11, 20, 20], 5, 1)); // Output: 2





// We need to find a way to efficiently increase the frequency of one number as much as possible. 
// A good approach to solving this problem is sorting the array and then using a sliding window to find the largest group of numbers that can be turned into the same value by applying the allowed range of operations.

