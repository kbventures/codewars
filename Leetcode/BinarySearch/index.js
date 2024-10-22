// https://leetcode.com/problems/binary-search/description/


// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.


// V1 Brute Force

// var search = function(nums, target) {

//     let left = 0;
//     let right = nums.length -1

//     while(left <= right){
//         console.log(left,right)
//         if(nums[left]== target){
//             return left 
//         } else if (nums[right]== target){
//             return right;
//         }

//         left++
//         right--    
//     } 
//     // isn't found
//     return -1
// };

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// // Start from middle V2
// var search = function(nums, target) {

//     // Get middle rounded down for floating numbers
//     let middle = Math.floor(nums.length/ 2)

//     // Check if middle found target number
//     if(nums[middle]=== target){
//         return middle
//     } else if (nums.length ==2 ){
//         if(nums[0]== target){
//             return 0
//         }
//     }

//     // Initialze pointers based on potential location
//     let left,right; 
//     if(nums[middle] > target){
//         right = middle -1
//         left = 0; 
//     } else {
//         right = nums.length-1
//         left = middle + 1; 
//     }


//     while(left < right){
//         // Check if found
//         if(nums[left]=== target || nums[right]=== target){
//             return nums[left]===target ? left : right
//         }
//         middle = Math.floor((left+right)/2 )

//         if(nums[middle]=== target) return middle; 


//         if(nums[middle] > target){
//             right = middle -1
//             left++ 
//         } else {
//             right = nums.length-1
//             left = middle + 1; 
//         }
//     }

//     // Not Found
//     return -1
// };


// // const result = search([-1,0,3,4,9,12,13],9)

// const result = search([-1,0,5],5)


// // const result = search([-1,0,3,5,9,12])

// console.log("result", result)


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// V3 pure binary search
var search = function(nums, target) {
let left = 0;
let right = nums.length-1;


while(left <= right){
    const middle = Math.floor((left+right)/2)

    if(nums[middle] == target){
        return middle; 
    } else if(nums[middle] > target){
        right = middle - 1
    } else {
        left = middle +1 
    }
}

// Not found
return -1 

};

const result = search([-1,0,3,5,9,12], 9)

// left 0 right 6 middle 3
// left 0 right 3 middle 1
// left 1 right 3 middle 2
// left 1 right 2 middle 1


// const result = search([-1,0,3,4,9,12,13],9)

// const result = search([-1,0,5],5)


// const result = search([-1,0,3,5,9,12])

console.log("result", result)