// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Before rotation nums[0] is the minimum number
// If regain pre rotations form nums[0] is the answer?
function findMin(nums: number[]): number {
    let start =0;
    let end = nums.length-1
    
    while(start < end){
    let mid = Math.floor((start+end)/2)
    
    if(nums[mid]> nums[end]){34
        start = mid +1
    } else {
        end = mid; 
    }
    
    }
    return nums[start]
};