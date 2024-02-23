// Array reverse or reverse a array means changing the position of each number of the given array to its opposite position from end, i.e. if a number is at position 1 then its new position will be Array.length, similarly if a number is at position 2 then its new position will be Array.length – 1, and so on.


// Given an array (or string), the task is to reverse the array/string.

// Examples:

// Input: original_array[] = {1, 2, 3} Output: array_reversed[] = {3, 2, 1}


// Input: original_array[] = {4, 5, 1, 2}
// Output: array_reversed[] = {2, 1, 5, 4}


function RevArr(arr){
if(arr.length == 1) return arr


for(let i = 0; i < arr.length / 2;i++){
let temp = arr[i]
arr[i] = arr[arr.length -1 -i] 
arr[arr.length -1 -i] = temp; 
}

return arr; 
}

const result1 = RevArr([4,5,1,3])

const result2 = RevArr([4,5,6,1,2])

console.log(result1, result2);