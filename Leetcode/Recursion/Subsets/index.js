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
// var subsets = function(nums) {
//     // Starting point
//     let result = [[]]

//     function recSubSet(res,numArr,len){
//         // Base case1
//         if(len == -1){
//             return res;
//         }
//         let temp = numArr.slice(1)
//         // Exclude
//         const excludedResult = recSubSet(res,temp, temp.length -1)
//         let tempResult = r;
//         res.push(tempResult)

//     }
//     // Sets recursive DFS
//     return recSubSet(result, nums, nums.length-1)
// };


// const result = subsets([1,2])

// console.log("Final subset", result)



// // Solution
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function(nums) {
//     let result = [];

//     function backtrack(currentSubset, index) {
//         // Base case: when we've considered all elements
//         if (index === nums.length) {
//             result.push([...currentSubset]);
//             return;
//         }

//         // Decision 1: Exclude the current element
//         backtrack(currentSubset, index + 1);

//         // Decision 2: Include the current element
//         currentSubset.push(nums[index]);
//         backtrack(currentSubset, index + 1);

//         // Undo the inclusion for the next recursion branch
//         currentSubset.pop();
//     }

//     // Start with an empty subset and index 0
//     backtrack([], 0);

//     // Reverse the result as per your instructions
//     return result.reverse();
// };

// // Example usage:
// console.log(subsets([1, 2, 3]));



// Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// Brute force
// var subsets = function(nums) {
//     let result = [[]];

//         // Iterate through each number in the input array
//         for (let num of nums) {
//             // For each existing subset, create a new subset by adding the current number
//             let newSubsets = result.map(subset => [...subset, num]);
//             console.log("newSubsets",newSubsets)
    
//             // Add the new subsets to the result
//             result = [...result, ...newSubsets]
//         }
    
//         return result;

// };

// // Example usage:
// console.log(subsets([1, 2, 3]));


// Alternative recursive version

// var subsets = function(nums) {
//     let result = [];
    
//     function backtrack(index, currentSubset) {
//         // Add the current subset to the result (we add it before any further choices)
//         result.push([...currentSubset]);

//         // Try to include each element starting from the current index
//         for (let i = index; i < nums.length; i++) {
//             // Include nums[i] in the current subset
//             currentSubset.push(nums[i]);
            
//             // Move forward to include more elements
//             backtrack(i + 1, currentSubset);

//             // Backtrack by removing nums[i]
//             currentSubset.pop();
//         }
//     }

//     backtrack(0, []);
//     return result;
// };

// nums = [1,2,3]
// result [[]]
// Starting look 0 to 2

//[[], [1], [1,2]]



// var subsets = function(nums) {
//     // 'allSubsets' will store all the subsets.
//     const allSubsets = [];
  
//     // 'currentSubset' is a temporary storage to build each subset.
//     let currentSubset = [];

//     // Helper function to perform depth-first search to build subsets.
//     const buildSubsets = (index) => {
//         // If the current index is equal to the length of 'nums',
//         // a subset is complete and we can add a copy to 'allSubsets'.
//         if (index === nums.length) {
//             allSubsets.push(currentSubset.slice());
//             return;
//         }
//         // Recursive case 1: Exclude the current element and move to the next.
//         buildSubsets(index + 1);
      
//         // Include the current element in the 'currentSubset'.
//         currentSubset.push(nums[index]);

//         // Recursive case 2: Include the current element and move to the next.
//         buildSubsets(index + 1);

//         // Backtrack: Remove the last element before going up the recursive tree.
//         currentSubset.pop();
//     };

//     // Start building subsets from the first index.
//     buildSubsets(0);
//     return allSubsets;
// };

// const finalResult = subsets([1,2,3])


// console.log(finalResult)

// DFS / Backtracking
var subsets = function(nums) {
    let currentSubset = []
    let allSubsets = []

    function dfs(index){
        // base case
        if(index === nums.length){
            //do something
            console.log(allSubsets)
            allSubsets.push(currentSubset.slice())
            console.log(allSubsets)
            // backtrack
            return
        }

        // exclude
        dfs(index+1)

        currentSubset.push(nums[index])

        // include
        dfs(index+1)

        // reduce index

        currentSubset.pop()
    }

    dfs(0)
    return allSubsets
};

const finalResult = subsets([1,2,3])
console.log(finalResult)










