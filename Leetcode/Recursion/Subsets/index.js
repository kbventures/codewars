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


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // Starting point
    let result = [[]]

    function recSubSet(res,numArr,len){
        // Base case1
        if(len == -1){
            return res;
        }
        // Counter
        let temp = numArr.slice(1)
        // Exclude
        const include = recSubSet(res,temp, len -1)
        // Include
        res.push([numArr[0]])
        const exclude = recSubSet(res, temp, len-1);
        return res;
    }

    // Sets recursive DFS
    return recSubSet(result, nums, nums.length-1)
};


const result = subsets([1,2,3])

console.log("Final subset", result)

