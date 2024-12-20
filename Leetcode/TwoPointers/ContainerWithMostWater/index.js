// /https://leetcode.com/problems/3sum/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let left =0;
    let right = height.length -1 
    result= 0; 
    while(left < right){
        // You need to figure out the calculation
        let minHeight = Math.min(height[left],height[right])
        let currentWaterContained = minHeight * (right - left);
        // updates teh result of the current water container maintaing the higest value
        if(currentWaterContained > result){
            result = currentWaterContained; 
        }

        if(height[left] > height[right]){
            right--

        } else if (height[left] < height[right]){
            left++

        } else {
            left++
            right--
        }
    }
    return result; 
};
const test0 = maxArea([1,3,2,5,25,24,5])