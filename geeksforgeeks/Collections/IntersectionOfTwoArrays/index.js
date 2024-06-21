// https://leetcode.com/problems/intersection-of-two-arrays/description/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // V1 Brune Force
    // let result = []
    // for(let i =0; i< nums1.length;i++){
    //     for(let y =0; y<nums2.length;y++){
    //         if(nums1[i]== nums2[y] && result.indexOf(nums2[y]) == -1){
    //             result.push(nums2[y])
    //         }
    //     }
    // }
    // console.log(result)
    // return result; 

    // V2 Object
    // let result = []; 
    // let hash1 = {}
    // let hash2 = {}
    // for( let n of nums1){
    //     hash1[n] ? hash1[n] : hash1[n] = 1; 
    // }
    // for( let n of nums2){
    //     hash2[n] ? hash2[n]: hash2[n] = 1; 
    // }
    // for(let n in hash1){
    //     if(hash1[n] == hash2[n] && hash2[n]==1){
    //     hash2[n]++
    //     result.push(n)
    //     }
    // }

    // return result;

    // V2.5 Object
    // let result = []; 
    // let hash1 = {}
    // for( let n of nums1){
    //     hash1[n] ? hash1[n] : hash1[n] = 1; 
    // }
    // for(let i =0; i<nums2.length;i++){
    //     if(hash1[nums2[i]] && hash1[nums2[i]] == 1){
    //         result.push(nums2[i])
    //         hash1[nums2[i]]++
    //     }
    // }
    // return result;

    // V3 Map

    // V4 Set 
    // let newSet1 = new Set(nums1)
    // let result = new Set()
    // for(let i =0; i<nums2.length;i++){
    //     if(newSet1.has(nums2[i])){
    //         console.log(newSet1.has(nums2[i]))
    //         result.add(nums2[i])
    //     }
    // }
    // return Array.from(result)


    const intersection = (nums1, nums2) => {
        const set1 = new Set(nums1);
        const intersection = [];
      
        for (let num of nums2) {
          if (set1.has(num)) {
            intersection.push(num);
            set1.delete(num);
          }
        }
      
        return intersection;
      };
};



const result = intersection([1,2,2,1],[2,2])
console.log("final result",result)