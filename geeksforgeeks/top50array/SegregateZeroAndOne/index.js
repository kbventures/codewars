// Segregate 0s and 1s in an array

// You are given an array of 0s and 1s in random order. Segregate 0s on left side and 1s on right side of the array [Basically you have to sort the array]. 
// Traverse array only once. 

// Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
// Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

// Two Pointer Approach V1

// O(n)
function segrateZeroAndOne(arr){
let start =0;
let end = arr.length -1;
while(start < end){
    console.log(start,end)
if(arr[start] !== arr[end] && arr[end] == 0){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    end--
} else if (arr[start] !== arr[end] && arr[end] == 1 ){
    start++
    end--
} else if(arr[start] == 0 && arr[end]==0){
    start++
} else {
    end--
}
}

return arr
}

const result = segrateZeroAndOne([0,1,0,1,0,0,1,1,1,0])

console.log(result)