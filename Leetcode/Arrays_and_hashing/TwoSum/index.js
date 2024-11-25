// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //PREP
 // array integers nums and integer target
 // Return indes of two numbers that add up to target
 // Example:
 // Pseudocode

 // 0 Brute force time complexity O(n^2) and space complexity O(1)
 var twoSum = function(nums, target) {
    for(let i=0; i<=nums.length;i++){
        for(let y=i+1; y<=nums.length;y++)
        {
            let tempSum = nums[i] + nums[y]
            if(tempSum == target) return [i,y]
        }
    }
};

// V1 Two Pointers
// O(n^2) Space complexity still :()
var twoSum = function(nums, target) {  
    // We can't utilise the same digit twice 
    let left = 0;
    let right = 1; 

    // There is exackly one solution so we iterate until we find the combination
    while(true){
        let twoSum = nums[left] + nums[right]; 
        if(twoSum == target) return [left,right]
        if(right == nums.length-1){
            left++
            right = left +1; 
        } else {
             right++
        }
    }
};

// X + T = target donc target - X = T ou target - T = X


var twoSum = function(nums, target) {
    let newHash = {}
    for(let i =0; i<nums.length;i++){
        let complement = target - nums[i]

        if(complement in newHash){
            return [i,newHash[complement]]
        }
        newHash[nums[i]] = i; 
    }
};