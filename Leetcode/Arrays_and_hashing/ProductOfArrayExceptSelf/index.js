// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution
    // var productExceptSelf = function(nums) {
    //     let result = new Array(nums.length);
        
    //     // Step 1: Calculate prefix products
    //     let prefix = 1;
    //     for (let i = 0; i < nums.length; i++) {
    //         result[i] = prefix;
    //         prefix *= nums[i];
    //         // console.log(result)
    //     }
    
    //     // Starting 1,2,3,4 from left to right results in 1,1,2,6
    //     // and now we go from right to left: 
    //     console.log("result",result)
    //     // Step 2: Calculate suffix products and update result
    //     let suffix = 1;
    //     for (let i = nums.length - 1; i >= 0; i--) {
    //         result[i] *= suffix
    //         console.log("nums[i],",nums[i])
    //         suffix *= nums[i];
    //         console.log("result", result)
    //     }
    //     return result;
    // };  



  // [1,2,3,4]
    var productExceptSelf = function(nums) {
      let arr = new Array(nums.length).fill(0)
      let prefix=1;
      let suffix =1; 

      // Left to right
      for(let i=0;i<nums.length;i++){
        arr[i] = prefix;
        prefix = nums[i] * prefix;
      }
      // arr = [1,1,2,6]

      // Right to left 
      for(let y=nums.length-1;y>=0;y--){
        arr[y] = suffix * arr[y]
        suffix = suffix * nums[y]
      }


        return arr;
    };  


    const res = productExceptSelf([1,2,3,4])
    // res should be 24, 12, 8, 6
    console.log(res)



