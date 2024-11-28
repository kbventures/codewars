// https://leetcode.com/problems/top-k-frequent-elements

// 347. Top K Frequent Elements
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
    var topKFrequent = function(nums, k) {

        let newHash = {}
        for(let i = 0;i<nums.length;i++){
            newHash[nums[i]] ? newHash[nums[i]]++ : newHash[nums[i]] = 1; 
            console.log("result", newHash)
        }
        let result = []
        for(let z in newHash){
            result.push(newHash[z])
        }
         
        result = result.sort()
        let result1 = result[result.length-1]
        let result2 = result[result.length-2]

        return [result1,result2]
    };


const result = topKFrequent([1,1,1,2,2,3],2)

console.log(result)


// 1 Map Version
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

