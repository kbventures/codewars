// https://leetcode.com/problems/sort-array-by-parity-ii/description/

// 922. Sort Array By Parity II
// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

 

// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]
 

// Constraints:

// 2 <= nums.length <= 2 * 104
// nums.length is even.
// Half of the integers in nums are even.
// 0 <= nums[i] <= 1000
 

// Follow Up: Could you solve it in-place?


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Brute force
var sortArrayByParityII = function(nums) {
    let start = 0; 
    let end = nums.length - 1 ;
    let i = 0; 
    let oddArr = []
    let evenArr = []
    let finalArr=[];
    // Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
    for(let i =0; i< nums.length;i++){
        if(nums[i] % 2 == 1){
            oddArr.push(nums[i])
        } else {
            evenArr.push(nums[i])
        }
    }
    console.log(oddArr,evenArr)

    // / Initialize indices for odd and even arrays
    let oddIndex = 0;
    let evenIndex = 0;

    // Merge odd and even arrays into finalArr
    for(let i = 0; i < nums.length; i++){
        if(i % 2 === 1){
            finalArr.push(oddArr[oddIndex]);
            oddIndex++;
        } else {
            finalArr.push(evenArr[evenIndex]);
            evenIndex++;
        }
    }

    return finalArr;
    
};

const result0 = sortArrayByParityII([1,4,4,3,0,3])
console.log(result0)
// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]