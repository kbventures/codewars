// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var threeSum = function(nums) {
        let sortedNums = nums.sort((a,b)=>a-b)
        let result = []
        for(let i =0;i<nums.length;i++){
            let left = i+1
            let right = nums.length -1
            while(left < right){
                let tempCheck = nums[i] + nums[left] + nums[right]
                if(tempCheck == 0){
                    result.push[i,left,right]
                }
            }
        }
        return result; 
    };
};


