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
        // We sort the numbers in order to be able to perform a 2 pointer to find two digits
        // In the two pointer 2sum we move the pointers on the right left until the target sum is equal or less to the targer
        // and if the right pointer and left pointer value sum is smaller than the target we move the left pointer to the right and so on
        // so forth which solves two numbers. 
        let sortedNums = nums.sort((a, b) => a - b);
        //Input: nums = [-4,-1,-1,0,1,2]


        // this will hold the unique combinations
        let result = [];
        
     // We fix the first number and perform a two pointer on the other two values;
        for (let i = 0; i < nums.length; i++) {

            // if the fixed number is positive we can break out of the look and return []
            // because it's not possible to obtain 0 with positive numbers
            // we know they will all be positive numbers after because they are now sorted
            // this also serves to break out early if there no possible solutions and improves
            // performance avoiding uncessary checks. 
            if(nums[i]>0)break

            // Once we have checked the first value we can start skipping duplicate values by
            // comparing the current value and the previous
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


