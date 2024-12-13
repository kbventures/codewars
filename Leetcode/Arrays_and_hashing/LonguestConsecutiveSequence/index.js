// https://leetcode.com/problems/longest-consecutive-sequence/description/


// // V1
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function(nums) {

//     // enable checking numbers utilisnig reference instead of looping through an array utilising  set
//     let numsSet = new Set(nums)
    
//     // utilized to store the last longuest sequence
//     let longSeq = []
    
    
//     // Iterate through all the nums
//     for(let i = 0; i < nums.length; i++){ 
            
//         // temporary hodler of current sequence
//         let currSequence = []
    
//         // utilised to iterate when start of sequence is found
//         let counter = 1; 
    
//         // is it start of sequence?
//         if(!numsSet.has(nums[i]-1)){
    
//             // add initial sequence number
//             currSequence.push(nums[i])
    
//             while(numsSet.has(nums[i]+counter)){
//                 currSequence.push(nums[i+counter])
//                 counter++
//             }
//         } 
    
//         if(currSequence.lenght > longSeq.length){
    
//             // replaces longSeq with shallow copy of current longuest sequence
//             longSeq = currSquence.slice()
//         }
    
    
//         // reset counters and temporary variables
//     }
//     return longSeq.length
//     };





// V2 Optimised

// V1
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums.length == 0) return 0; 

    // enable checking numbers utilisnig reference instead of looping through an array utilising  set
    let numsSet = new Set(nums)
    
    // utilized to store the last longuest sequence
    let longSeq = 0
    
    
    // Iterate through all the nums
    for(const num of numsSet){ 
            
        // temporary hodler of current sequence
        let currSequence= 1 
    
        // is it start of sequence?
        if(!numsSet.has(num-1)){
        
            while(numsSet.has(num+currSequence)){
                currSequence++
            }
        } 
    
        if(currSequence > longSeq){
    
            // replaces longSeq with shallow copy of current longuest sequence
            longSeq = currSequence; 
        }
    
    
        // reset counters and temporary variables
    }
    return longSeq
    };