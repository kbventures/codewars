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
            allSubsets.push(currentSubset.slice())
            console.log("allSubsets", JSON.stringify(allSubsets, null))
            // backtrack
            return
        }

        // exclude
        dfs(index+1)

        currentSubset.push(nums[index])
        console.log("currentSubset", JSON.stringify(currentSubset, null))

        // include
        dfs(index+1)

        // reduce index

        currentSubset.pop()
        console.log("currentSubset pop: ", JSON.stringify(currentSubset,null))

    }

    dfs(0)
    return allSubsets
};

// const finalResult = subsets([1])
const finalResult = subsets([1,2])
// const finalResult = subsets([1,2,3])
console.log(finalResult)


// Summary of Breakpoints
// Before each dfs(index + 1) call: To track when you include/exclude an element.
// After adding to allSubsets: To see the complete subset being stored.
// Before popping from currentSubset: To observe the state before backtracking.


// add allSubsets [[]]
// add current subset [3]
// add allSubsets [[],[3]]
// currentSubset pop:  []
// add current subset [2]
// add allSubsets [[],[3],[2]]
// add current subset [2,3]
// add allSubsets [[],[3],[2],[2,3]]
// currentSubset pop:  [2]
// currentSubset pop:  []
// add current subset [1]
// add allSubsets [[],[3],[2],[2,3],[1]]
// add current subset [1,3]
// add allSubsets [[],[3],[2],[2,3],[1],[1,3]]




// Starting Array [1,2]

// Step-by-Step Execution
// Start: Call dfs(0)

// index = 0, currentSubset = []
// Exclude 1: Call dfs(1)
// Second Call: dfs(1)

// index = 1, currentSubset = []
// Exclude 2: Call dfs(2)
// Third Call: dfs(2)

// index = 2, currentSubset = [] (Base case)
// Add [] to allSubsets
// Return to dfs(1)
// Back to Second Call: dfs(1)

// Backtrack to currentSubset = []
// Now include 2:
// currentSubset = [2]
// Call dfs(2)
// Fourth Call: dfs(2)


// ******

// // index = 2, currentSubset = [2] (Base case)
// // Add [2] to allSubsets
// // Backtrack: pop 2 from currentSubset
// // Back to First Call: dfs(0)
// *****

// Backtrack to currentSubset = []
// Now include 1:
// currentSubset = [1]
// Call dfs(1)
// Fifth Call: dfs(1)

// index = 1, currentSubset = [1]
// Exclude 2: Call dfs(2)
// Sixth Call: dfs(2)

// index = 2, currentSubset = [1] (Base case)
// Add [1] to allSubsets
// Backtrack: pop 1 from currentSubset
// Back to Fifth Call: dfs(1)

// Backtrack to currentSubset = []
// Now include 2:
// currentSubset = [1, 2]
// Call dfs(2)
// Seventh Call: dfs(2)

// index = 2, currentSubset = [1, 2] (Base case)
// Add [1, 2] to allSubsets
// Backtrack: pop 2 from currentSubset


// Starting array [1,2,3]

// Step-by-Step Execution
// Let’s break down the execution:

// Start: Call dfs(0)

// index = 0, currentSubset = []
// Exclude 1: Call dfs(1)
// Second Call: dfs(1)

// index = 1, currentSubset = []
// Exclude 2: Call dfs(2)
// Third Call: dfs(2)

// index = 2, currentSubset = []
// Exclude 3: Call dfs(3)
// Fourth Call: dfs(3)

// index = 3, currentSubset = [] (Base case)
// Add [] to allSubsets
// Return to dfs(2)
// Back to Third Call: dfs(2)

// Now include 3:
// currentSubset = [3]
// Call dfs(3)
// Fifth Call: dfs(3)

// index = 3, currentSubset = [3] (Base case)
// Add [3] to allSubsets
// Backtrack: pop 3 from currentSubset
// Back to Second Call: dfs(1)

// Backtrack: currentSubset = [] (after popping 3)
// Now include 2:
// currentSubset = [2]
// Call dfs(2)
// Sixth Call: dfs(2)

// index = 2, currentSubset = [2]
// Exclude 3: Call dfs(3)
// Seventh Call: dfs(3)

// index = 3, currentSubset = [2] (Base case)
// Add [2] to allSubsets
// Backtrack: pop 2 from currentSubset
// Back to Sixth Call: dfs(2)

// Now include 3:
// currentSubset = [2, 3]
// Call dfs(3)
// Eighth Call: dfs(3)

// index = 3, currentSubset = [2, 3] (Base case)
// Add [2, 3] to allSubsets
// Backtrack: pop 3 from currentSubset
// Back to First Call: dfs(0)

// Backtrack: currentSubset = [] (after popping 3)
// Now include 1:
// currentSubset = [1]
// Call dfs(1)
// Ninth Call: dfs(1)

// index = 1, currentSubset = [1]
// Exclude 2: Call dfs(2)
// Tenth Call: dfs(2)

// index = 2, currentSubset = [1]
// Exclude 3: Call dfs(3)
// Eleventh Call: dfs(3)

// index = 3, currentSubset = [1] (Base case)
// Add [1] to allSubsets
// Backtrack: pop 1 from currentSubset
// Back to Tenth Call: dfs(2)

// Now include 3:
// currentSubset = [1, 3]
// Call dfs(3)
// Twelfth Call: dfs(3)

// index = 3, currentSubset = [1, 3] (Base case)
// Add [1, 3] to allSubsets
// Backtrack: pop 3 from currentSubset
// Back to Ninth Call: dfs(1)

// Now include 2:
// currentSubset = [1, 2]
// Call dfs(2)
// Thirteenth Call: dfs(2)

// index = 2, currentSubset = [1, 2]
// Exclude 3: Call dfs(3)
// Fourteenth Call: dfs(3)

// index = 3, currentSubset = [1, 2] (Base case)
// Add [1, 2] to allSubsets
// Backtrack: pop 2 from currentSubset
// Back to Thirteenth Call: dfs(2)

// Now include 3:
// currentSubset = [1, 2, 3]
// Call dfs(3)
// Fifteenth Call: dfs(3)

// index = 3, currentSubset = [1, 2, 3] (Base case)
// Add [1, 2, 3] to allSubsets
// Backtrack: pop 3 from currentSubset











