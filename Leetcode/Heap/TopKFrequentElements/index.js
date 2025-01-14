// https://leetcode.com/problems/top-k-frequent-elements/description/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Hedge case for when they have 1 or 0 elements
    if(nums.length == 0 || nums.length == 1) return nums
    // Cases
    let newMap = new Map()
    for(let i = 0;i<nums.length;i++){
        newMap.has(nums[i]) ? newMap.set(nums[i],newMap.get(nums[i]) + 1) : newMap.set(nums[i],1) 
    }
    const sortedMap = 
  [...newMap].sort(([, valueA], [, valueB]) => valueB - valueA)

let result = []

for(let y = 0; y < k; y++){
    result.push(sortedMap[y][0])
}
return result; 
};