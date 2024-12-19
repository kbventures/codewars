// /https://leetcode.com/problems/3sum/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let containers = height.length -1
    let left =0;
    let right = height.length -1 
    result= 0; 
    console.log(containers, left, right)
    while(left < right){
        // console.log(height)
        // console.log(height[left],height[right])
        // // You need to figure out the calculation
        // let figuremeout = height[left] >= height[right] ? height[left] : height[right]
        // let currentWaterContained = figuremeout * containers;


        // // updates teh result of the current water container maintaing the higest value
        // if(currentWaterContained> result){
        //     result = currentWaterContained; 
        //     console.log('result',result)

        // }

        // if(height[left] > height[right]){
        //     right--
        //             containers--

        // } else if (height[left] < height[right]){
        //     left++
        //             containers--

        // } else {
        //     left++
        //     right--
        //             containers--

        // }
    }

    return result; 
};