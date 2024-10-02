// https://leetcode.com/problems/subsets/description/

// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.


// V1 Brute force
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subSet = new Set()
    subSet.add([])
    console.log(subSet)

    for(let i =0;i<nums.length;i++){
        subSet.add([nums[i]])
        for(let j =1;j<nums.length;j++){
        subSet.add([nums[i],nums[j]])
            } 
        }

    subSet.add([...nums])
    return Array.from(subSet)
};


const result = subsets([1,2,3,4,5])

console.log(result)

// V2 Recursion