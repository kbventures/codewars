// 100451. Construct the Minimum Bitwise Array I
// Difficulty:Easy
// You are given an array nums consisting of n prime integers.

// You need to construct an array ans of length n, such that, for each index i, the bitwise OR of ans[i] and ans[i] + 1 is equal to nums[i], i.e. ans[i] OR (ans[i] + 1) == nums[i].

// Additionally, you must minimize each value of ans[i] in the resulting array.

// If it is not possible to find such a value for ans[i] that satisfies the condition, then set ans[i] = -1.

// A prime number is a natural number greater than 1 with only two factors, 1 and itself.

 

// Example 1:

// Input: nums = [2,3,5,7]

// Output: [-1,1,4,3]

// Explanation:

// For i = 0, as there is no value for ans[0] that satisfies ans[0] OR (ans[0] + 1) = 2, so ans[0] = -1.
// For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 3 is 1, because 1 OR (1 + 1) = 3.
// For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 5 is 4, because 4 OR (4 + 1) = 5.
// For i = 3, the smallest ans[3] that satisfies ans[3] OR (ans[3] + 1) = 7 is 3, because 3 OR (3 + 1) = 7.
// Example 2:

// Input: nums = [11,13,31]

// Output: [9,12,15]

// Explanation:

// For i = 0, the smallest ans[0] that satisfies ans[0] OR (ans[0] + 1) = 11 is 9, because 9 OR (9 + 1) = 11.
// For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 13 is 12, because 12 OR (12 + 1) = 13.
// For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 31 is 15, because 15 OR (15 + 1) = 31.
 

// Constraints:

// 1 <= nums.length <= 100
// 2 <= nums[i] <= 1000
// nums[i] is a prime number.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {

    let ans = []
    ans.length = nums.length;

    return ans;
};

const finalResult = minBitwiseArray([2,3,5,7])

console.log("final result, ", finalResult)



// Very Simple Explanation:
// You have a list of special numbers called prime numbers (like 2, 3, 5, 7, etc.).
// You need to make another list (let's call it ans) with the same number of spots as your first list.
// For each spot in the new list:
// You need to find a number that, when you do a special check (called bitwise OR) with the number just after it (plus 1), equals the special number in your first list.
// Try to find the smallest number that works.
// If you can't find a number that works, put -1 in that spot.
// Example:
// If the special number is 5:
// You check numbers starting from 0 to see which one works.
// If 4 works, you put 4 in ans.
// If nothing works, you put -1.
// Summary:
// You are playing a game of finding matching numbers that follow the special rules with your prime numbers!


// Solution

var minBitwiseArray = function(nums) {
    const ans = [];
  
    for (let i = 0; i < nums.length; i++) {
      let ansValue = -1;
      let currentNumber = nums[i];
  
      // While the current number is greater than 0:
      while (currentNumber > 0) {
        // Find the least significant bit (LSB) that is set to 1:
        const leastSignificantBit = currentNumber & -currentNumber;
  
        // Subtract the LSB from the current number:
        currentNumber -= leastSignificantBit;
  
        // If the LSB is 1:
        if (leastSignificantBit === 1) {
          // Set ansValue to the maximum of its current value and 0 (LSB - 1):
          ansValue = Math.max(ansValue, 0);
        } else if (leastSignificantBit > 1) {
          // Set ansValue to the maximum of its current value and the LSB minus 2:
          ansValue = Math.max(ansValue, leastSignificantBit - 2);
        }
      }
  
      // Add the calculated ansValue to the ans array:
      ans.push(ansValue);
    }
  
    // Return the ans array:
    return ans;
  };