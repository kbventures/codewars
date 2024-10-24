// 2

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
// var searchRange = function(nums, target) {

//     let left =0;
//     let right = nums.le        
//     let middle = Math.floor(left + right / 2); 
//     let targetRange = [-1,-1]
//     // Find Initial target
//     while(left <= right){
//         if(nums[middle] === target){
//             targetRange = [middle, middle]; 
//             break; 
//         } else if (middle < target){
//             left = middle +1
//         } else {
//             right = middle -1;
//         }
//         let middle = Math.floor(left + right / 2); 
//     }
// };


// const result0 = searchRange([5,6,7,8,10],6)

// const result1 = searchRange([5,7,7,8,8,10], 7)

// const result2 = searchRange([5,7,7,8,8,8,8,8,10], 8)





// Recursive call search range again with range 6,6 one recursion for the left and one reccursion for the right?

var searchRange = function(nums, target) {

    let left =0;
    let right = nums.le        
    let middle = Math.floor(left + right / 2); 
    let targetRange = [-1,-1]
    // Find Initial target
    while(left <= right){
        if(nums[middle] === target){
            targetRange = [middle, middle]; 
            right = middle -1
            middle = Math.floor(right+left /2)
            break; 
        } else if (middle < target){
            left = middle +1
        } else {
            right = middle -1;
        }
        let middle = Math.floor(left + right / 2); 
    }

    // if target is found return [-1,-1]

    // Find left
    while(left <= right){
        if(nums[middle] === target){
            targetRange[0] = middle; 
            right = middle -1
        } else if (middle < target){
            left = middle +1
        } else {
            right = middle -1;
        }
        let middle = Math.floor(left + right / 2); 
    }

    // Find right
    while(left <= right){
        if(nums[middle] === target){
            targetRange[0] = middle; 
            right = middle -1
        } else if (middle < target){
            left = middle +1
        } else {
            right = middle -1;
        }
        let middle = Math.floor(left + right / 2); 
    }


    return targetRange; 
};

// 0 + 13 /2 6
// 6 = 8 donc starting range is [6,6]
// right is now middle -1 = 5 and we're assigned to what's round to right as we we'll be checking left next
// left is wherever we left it
// new middle is 3 

// checking left
// check if 3 is equal.. which it is... so we move left range to [3,6]
// right is now itself -1 = 2, left is whrever we left it in this case 0


// checking right 


const result3 = searchRange([5,7,7,8,8,8,8,8,8,8,8,8,10], 8)


