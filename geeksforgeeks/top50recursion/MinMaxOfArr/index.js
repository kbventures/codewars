// Recursive Programs to find Minimum and Maximum elements of array
// Read
// Courses
// Practice
// Given an array of integers arr, the task is to find the minimum and maximum element of that array using recursion.

// Examples : 

// Input: arr = {1, 4, 3, -5, -4, 8, 6};
// Output: min = -5, max = 8

// Input: arr = {1, 4, 45, 6, 10, -8};
// Output: min = -8, max = 45


function minMaxArr(arr, index = arr.length - 1, min=arr[0], max=0){
if(index === -1 ) return [min,max];

    if(arr[index] < min) {min = arr[index]};
    if(arr[index] > max) {max = arr[index]};

    console.log(min,max)

    return minMaxArr(arr, index - 1, min, max )
}



const [min, max] = minMaxArr([100,-1,2,1000,5])

console.log(min,max)