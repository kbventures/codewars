// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution
    var productExceptSelf = function(nums) {
        let result = new Array(nums.length);
        
        // Step 1: Calculate prefix products
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
            // console.log(result)
        }
    
        // Starting 1,2,3,4 from left to right results in 1,1,2,6
        // and now we go from right to left: 
        console.log("result",result)
        // Step 2: Calculate suffix products and update result
        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= suffix
            console.log("nums[i],",nums[i])
            suffix *= nums[i];
            console.log("result", result)
        }
        return result;
    };  
