//https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/

// Given an array arr[] of integers and a number x, the task is to find the smallest subarray with a sum greater than the given value. 

// Examples:

// arr[] = {1, 4, 45, 6, 0, 19}
//    x  =  51
// Output: 3
// Minimum length subarray is {4, 45, 6}
// arr[] = {1, 10, 5, 2, 7}
//    x  = 9
// Output: 1
// Minimum length subarray is {10}
// arr[] = {1, 11, 100, 1, 0, 200, 3, 2, 1, 250}
//     x = 280
// Output: 4
// Minimum length subarray is {100, 1, 0, 200}
// arr[] = {1, 2, 4}
//     x = 8
// Output : Not Possible
// Whole array sum is smaller than 8.


// V1 Brute Force
// const SmallestSubArrWGreaterThanValue = function (arr,num){

// let result = null; 
// for(let i =0;i<arr.length;i++){
//     let tempSum = arr[i]
//     if(tempSum > num) 
//         {
//              result = 1;
//              return result;
//         }
//     let yy = 1; 
//     for(let y =(i+1); y<arr.length;y++){
//         tempSum += arr[y]
//         yy++
//         if(tempSum > num){
//             break;
//         }
//     }
//     if(tempSum > num){
//         if(yy < result || result == null){
//             result = yy; 
//         }
//     }
// }
// return result; 
// }    
    
// const result0 = SmallestSubArrWGreaterThanValue([1, 2, 4],8)
// console.log(result0)



// V1 Sliding Window
const SmallestSubArrWGreaterThanValue = function (arr,num){
let leftWindow =0;
let rightWindow=1;
let windowSum =arr[0]; 
let result = null; 

while(leftWindow < arr.length-1){
    windowSum += arr[rightwindow];

    if(windowSum > num){
        if( result == null || result > (rightWindow - leftWindow)){
            result = (rightWindow - leftWindow)
        }
    }
    rightWindow++
    if(rightWindow == arr.length -1){
        leftWindow++
        rightWindow = leftWindow + 1; 
        windowSum = arr[leftWindow]
    }
}
    return result; 
}    
    
const result0 = SmallestSubArrWGreaterThanValue([1, 4, 45, 6, 0, 19],51)
console.log(result0)



