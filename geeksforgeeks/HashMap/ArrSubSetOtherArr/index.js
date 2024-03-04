// Find whether an array is subset of another array
// Given two arrays: arr1[0..m-1] and arr2[0..n-1]. Find whether arr2[] is a subset of arr1[] or not. Both arrays are not in sorted order. It may be assumed that elements in both arrays are distinct.

// Examples: 

// Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1} 
// Output: arr2[] is a subset of arr1[]

// Input: arr1[] = {1, 2, 3, 4, 5, 6}, arr2[] = {1, 2, 4} 
// Output: arr2[] is a subset of arr1[]


// Input: arr1[] = {10, 5, 2, 23, 19}, arr2[] = {19, 5, 3} 
// Output: arr2[] is not a subset of arr1[] 


function IsArrSubSet(arr1,arr2){
let HashMap = {}

for(const index of arr1){
    if(!HashMap[index]) HashMap[index] = index;
}

for (const index of arr2){
    console.log(index)
    if(!HashMap[index]) return false; 
}

return true
}

// Time C
// O(m + n)
// Space C
// O(m)

// const result = IsArrSubSet([11,1,13,21,3,7],[11,3,7,1])

// console.log(result)

const result = IsArrSubSet([1,13,21,3,7],[11,3,7,1])

console.log(result)