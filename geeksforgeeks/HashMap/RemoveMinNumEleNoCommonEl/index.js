// Remove minimum number of elements such that no common element exist in both array
// Given two arrays A[] and B[] consisting of n and m elements respectively. Find the minimum number of elements to remove from each array such that no common element exist in both.

// Examples: 

// Input : A[] = { 1, 2, 3, 4}
//         B[] = { 2, 3, 4, 5, 8 }
// Output : 3
// We need to remove 2, 3 and 4 from any array.

// Input : A[] = { 4, 2, 4, 4}
//         B[] = { 4, 3 }
// Output : 1
// We need to remove 4 from B[]

// Input : A[] = { 1, 2, 3, 4 }
//         B[] = { 5, 6, 7 }
// Output : 0
// There is no common element in both.
// Recommended Problem
// Remove minimum number of elements
// Arrays
// Data Structures
// Solve Problem
// Submission count: 3.3K
// Count occurrence of each number in both arrays. If there is a number in both array remove number from array in which it appears less number of times add it to the result. 

// Implementation:

// v1
// function minNumNoComEl(arr1,arr2){
//     Ha = {}
//     Hb = {}
//     results=0; 
//     let shortest;
//     for(let i of arr1){
//         // console.log(i)
//         if(!Ha[i]){
//             Ha[i]=1
//         } else {
//             Ha[i]++
//         }
//     }

//     for(let i of arr2){
//         if(!Hb[i]){
//             Hb[i]=1
//         } else {
//             Ha[i]++
//         }
//     }
//     // console.log(Ha)
//     // console.log(Hb)

//     for(let zulu in Ha){
//         // console.log(typeof zulu)
//         if(Hb[zulu]){
//             results++
//         }
//     }

//     return results
// }

// const result = minNumNoComEl([1,2,3,4],[5,6,7])
// console.log(result)

//v2 Refactor
// function minNumNoComEl(arr1,arr2){
//     Ha = {}
//     Hb = {}
//     results=0; 
//     for(let i of arr1){
//         // console.log(i)
//         if(!Ha[i]){
//             Ha[i]=1
//         } else {
//             Ha[i]++
//         }
//     }
//     for(let i of arr2){
//         console.log(i)
//         if(!Hb[i]){
//             Hb[i]=1
//             if(Ha[i]){
//                 results++
//                 console.log(results)
//             }
//         } else {
//             Ha[i]++
//         }
//     }
//     return results
// }

// const result = minNumNoComEl([1,2,3,4],[4,5,6,7])
// console.log(result)

