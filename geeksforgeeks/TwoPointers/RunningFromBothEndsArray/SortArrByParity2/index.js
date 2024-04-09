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

// V1 Brute force
// var sortArrayByParityII = function(nums) {
//     let start = 0; 
//     let end = nums.length - 1 ;
//     let i = 0; 
//     let oddArr = []
//     let evenArr = []
//     let finalArr=[];
//     // Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
//     for(let i =0; i< nums.length;i++){
//         if(nums[i] % 2 == 1){
//             oddArr.push(nums[i])
//         } else {
//             evenArr.push(nums[i])
//         }
//     }
//     console.log(oddArr,evenArr)

//     // / Initialize indices for odd and even arrays
//     let oddIndex = 0;
//     let evenIndex = 0;

//     // Merge odd and even arrays into finalArr
//     for(let i = 0; i < nums.length; i++){
//         if(i % 2 === 1){
//             finalArr.push(oddArr[oddIndex]);
//             oddIndex++;
//         } else {
//             finalArr.push(evenArr[evenIndex]);
//             evenIndex++;
//         }
//     }

//     return finalArr;
    
// };

// const result0 = sortArrayByParityII([1,4,4,3,0,3])
// console.log(result0)
// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]

// V2 Two Pointers\
//Approach here is simple version of two pointers you can say. 
// If the current value is correctly placed we don't do anything. 
// Otherwise, we check the elements next to the current element and find the one we can swap the current value with.
// So for example, if current value is even, but the index is odd, 
// then from the next element (i+1) we start looking for an odd value once we have found it we swap the current value with that newly found value.


// var sortArrayByParityII = function(nums) {
//     let index =0;
//     // let end = nums.length;


//     for(let i =0; i< nums.length;i++)
//     {
//         if((nums[i] % 2 == 1 && i % 2 == 1 ) || (nums[i] % 2 == 0 && i % 2 == 0)){
//             // Do Nothing
//         } else {
//             let tempIndex = i + 1;
//             while(tempIndex < nums.length){

//                 if((nums[tempIndex] % 2 == 1 && i % 2 == 1) || (nums[tempIndex] % 2 == 0 && i % 2 == 0)) {
//                     console.log("happening?")

//                     let tempNum = nums[tempIndex]
//                     nums[tempIndex] = nums[i]
//                     nums[i] = tempNum;
//                     break; 
//                 }
//                 tempIndex++
//             }
//         }
//     }
//             return nums;

// };

// const result0 = sortArrayByParityII([1,2,1,2,1,2])
// console.log("result0",result0)

// V3 Optimised
// var sortArrayByParityII = function (nums) {
//     for (let i = 0, j = 1; i < nums.length; i += 2) {
//         if (nums[i] % 2 == 1) {
//             while (nums[j] % 2 == 1) {
//                 j += 2;
//             }
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//         }
//     }
//     return nums;
// };



// V4 New Attempt