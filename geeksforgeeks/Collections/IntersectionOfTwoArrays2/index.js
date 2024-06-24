// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input : nums1 = [1, 2, 2, 1], nums2 = [2, 2], 
// Output: return [2, 2]
// Example 2: 
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1’s size is small compared to nums2’s size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?



// V1 Fail
// const intersection2 = function (nums1,nums2){
//     let r = [];

//     for(let i=0;i<nums1.length;i++){
//         for(let y =0; y<nums2.length;y++){
//             if(nums1[i]== nums2[y]){
//                 r.push(nums2[y])
//             }
//         }
//     }

//     return r;
// }

// const result = intersection2([1,2,2,1],[2,2])

// console.log(result);

// V2 Object
// const intersection2 = function (nums1,nums2){
//     let hash1 = {}
//     let result = []
//     for(let num of nums1){
//         hash1[num] ? hash1[num]++ : hash1[num]=1;
//     }
//     for(let i=0;i<nums2.length;i++){
//         if(hash1[nums2[i]] > 0){
//             result.push(nums2[i])
//             hash1[nums2[i]]--
//         }
//     }
//     return result; 
// }

// const result = intersection2([1,2,2,1],[2,2])

// console.log(result);


// V3 Map

// const intersection2 = function (nums1,nums2){
// let newMap = new Map()
// let result = []

//     nums1.forEach(el=>{
//         console.log(el)
//         if(newMap.has(el)){
//             newMap.set(el, newMap.get(el) + 1)
//         } else {
//             newMap.set(el,1)
//         }
//     })

//     for(let z=0; z<nums2.length; z++){
//         if(newMap.has(nums2[z]) && newMap.get(nums2[z]) !== 0){
//             newMap.set(nums2[z], newMap.get(nums2[z])-1)
//             result.push(nums2[z])
//         }
//     }
//     return result; 
// }
// const r = intersection2([1,2,2,1],[2,2])

// console.log(r);

// V4 Set
// No possible with Set