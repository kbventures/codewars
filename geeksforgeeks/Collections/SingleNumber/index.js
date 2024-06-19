//https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {}
    // V!
    // for(value of nums){
    //     if(hash[value]){
    //     hash[value]++
    //     } else {
    //     hash[value]=1
    //     }
    // }
    // for(v in hash){
    //     console.log(v)
    //     if(hash[v]== 1) return v
    // }

    // V2
//       const seen = new Set();

//   for (const num of nums) {
//     if (seen.has(num)) {
//       seen.delete(num);
//     } else {
//       seen.add(num);
//     }
//   }

//   return Array.from(seen)[0];

    // V3
   const counts = new Map();

    for (const num of nums) {
        if (counts.has(num)) {
        counts.set(num, counts.get(num) + 1);
        } else {
        counts.set(num, 1);
        }
    }

    for (const [key, value] of counts) {
        if (value === 1) {
        return key;
        }
    }
};