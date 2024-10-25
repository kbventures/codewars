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




// var searchRange = function(nums, target) {
//     console.log("sanity check", nums, target)
//     // [2,2], 2 breaks
//     if(nums.length === 0) return [-1,-1]
//     if(nums.length ==1){
//         if(nums[0]===target){
//             return [0,0]
//         } else {
//             return [-1,-1]
//         }
//     }

//     if(nums.length === 2){
//         if(nums[0] ==target || nums[1] == target){
//             if (nums[0] == target & nums[1] == target){
//                 return [0,1]
//             } else if (nums[0]== target){
//                 return [0,0]
//             } else {
//                 return [1,1]
//             }
//         }
//         return [-1,-1]
//     }



//     // 1,2,3
//     // Init range
//     let left =0;
//     let right = nums.length;         
//     let middle = Math.floor((left + right) / 2); 
//     let targetRange = [-1,-1]

//     // Find Initial target
//     while(left < right){
//         if(nums[middle] === target){
//             targetRange = [middle, middle]; 
//             break; 
//         } else if (nums[middle] < target){
//             left = middle +1
//         } else {
//             right = middle -1;
//         }
//         if(left == right) return targetRange; 
//         middle = Math.floor((left + right) / 2); 
//     }

//     // if target is found return it will still be [-1,1]

//     // Init Left Check
//     left = 0;
//     right = middle -1; 
//     middle = Math.floor((left + right) / 2); 

//     // console.log(left, right, middle)

//     // Find left
//     while(left <= right){
//         if(nums[middle] === target){
//             targetRange[0] = middle; 
//         } else if (nums[middle] < target){
//             left = middle + 1
//         } else {
//             right = middle -1;
//         }
//         if(left == right) break; 
//         middle = Math.floor(left + right / 2); 
//     }


//     // Init Right Check
//     left = targetRange[1] + 1
//     right = nums.length; 
//     middle = Math.floor((left+right)/2)
//     console.log(left, right, middle)

//     // Find right
//     while(true){

//       if(nums[middle]=== target){
//         targetRange[1] = middle; 
//         if(left == right) break
//         left =middle + 1; 
//       } else if (nums[middle]> target){
//         right = middle - 1;
//       } else {
//         left = middle +1
//       }
//        middle = Math.floor((left + right)/2)
//     }

//     return targetRange; 
// };

// const result3 = searchRange([1], 0)

// console.log(result3)


// var searchRange = function(nums, target) {
//     console.log("sanity check", nums, target)
//     // [2,2], 2 breaks
//     if(nums.length === 0){
//         return [-1,-1]
//     } else if (nums.length ==1) {
//         if(nums[0]===target){
//             return [0,0]
//         } else {
//             return [-1,-1]
//         }
//     } 



//     // Init range
//     let left =0;
//     let right = nums.length-1;          
//     let middle = Math.floor((left + right) / 2); 
//     let targetRange = [-1,-1]

//     // Find Initial target
//     while(left < right){
//         if(nums[middle] === target){
//             targetRange = [middle, middle]; 
//             break; 
//         } else if (nums[middle] < target){
//             left = middle +1
//         } else {
//             right = middle -1;
//         }
//         middle = Math.floor((left + right) / 2); 
//     }

//     // if target is found return it will still be [-1,1]
//     // const result3 = searchRange([5,7,7,8,8,10], 8)
// // 3,4, 5
// // [4,4]


//     // Init Left Check
//     left = 0;
//     right = middle-1; 
//     middle = Math.floor((left + right) / 2); 

//     // 0 1 3

//     // 2 2 3

//     // Find left but skip left if we are already as far as we can go left
//     while(left <= right){

//         if(nums[middle] === target){
//             targetRange[0] = middle; 
//         } else if (nums[middle] < target){
//             left = middle + 1
//         } else {
//             right = middle -1;
//         }
//         if(left == right) break; 
//         middle = Math.floor(left + right / 2); 
//     }


//     // Init Right Check
//     left = targetRange[1] + 1
//     right = nums.length - 1;  
//     middle = Math.floor((left+right)/2)
//     // console.log(left, right, middle)

//     // Find right
//     while(true){

//       if(nums[middle]=== target){
//         targetRange[1] = middle; 
//         if(left == right) break
//         left =middle + 1; 
//       } else if (nums[middle]> target){
//         right = middle - 1;
//       } else {
//         left = middle +1
//       }
//        middle = Math.floor((left + right)/2)
//     }

//     return targetRange; 
// };

// const result3 = searchRange([5,7,7,8,8,10], 8)

// console.log(result3)

// solutions

var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1];

    let left = 0;
    let right = nums.length - 1;
    let targetRange = [-1, -1];

    // Find the leftmost index
    while (left <= right) {
        console.log(left,right)
        let middle = Math.floor((left + right) / 2);
        console.log(middle)
        if (nums[middle] === target) {
            targetRange[0] = middle; // Found target
            right = middle - 1; // Continue searching left
        } else if (nums[middle] > target) {
            right = middle - 1; 
        } else {
            left = middle + 1; 
        }
    }

    // Reset left and right for finding the rightmost index
    left = 0;
    right = nums.length - 1;

    // Find the rightmost index
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            targetRange[1] = middle; // Found target
            left = middle + 1; // Continue searching right
        } else if (nums[middle] > target) {
            right = middle - 1; 
        } else {
            left = middle + 1; 
        }
    }

    return targetRange;
};

// Example usage:
const result = searchRange([1, 2, 3], 1);
console.log(result); // Output: [0, 0]

