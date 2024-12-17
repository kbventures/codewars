// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// // V0 Brute force
// var twoSum = function(numbers, target) {
//     for(let i=0; i<numbers.length;i++){
//         for(let y = i+1; y<numbers.length;y++){
//         let tempResult = numbers[i] + numbers[y]
//         if(tempResult== target) return [i+1, y+1]
//         }
//     }
// };

// V1 Two pointers
var twoSum = function(numbers, target) {
    let left =0;
    let right = numbers.length -1
    while(true){
        let tempSum = numbers[left] + numbers[right]
        if(tempSum == target){
            return [left+1,right+1]
        } else if (tempSum > target){
            right--
        } else {
            left++
        }
    }
};