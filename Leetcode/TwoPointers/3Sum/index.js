// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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

    // solution
    var threeSum = function(nums) {
        let sortedNums = nums.sort((a, b) => a - b);
        let result = [];
        
        for (let i = 0; i < nums.length; i++) {
            if(nums[i]>0)break
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue; // Skip duplicates
            
            let left = i + 1;
            let right = nums.length - 1;
            
            while (left < right) {
                let tempCheck = sortedNums[i] + sortedNums[left] + sortedNums[right];
                
                if (tempCheck === 0) {
                    result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left++;
                    right--;
                    while (left < right && sortedNums[left] === sortedNums[left - 1]) left++; // Skip duplicates
                    while (left < right && sortedNums[right] === sortedNums[right + 1]) right--; // Skip duplicates
                } else if (tempCheck > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return result;
    };


