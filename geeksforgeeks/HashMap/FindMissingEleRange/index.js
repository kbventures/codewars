// Find missing elements of a range
// Given an array, arr[0..n-1] of distinct elements and a range [low, high], find all numbers that are in a range, but not the array. The missing elements should be printed in sorted order.

// Examples:  

// Input: arr[] = {10, 12, 11, 15}, 
//        low = 10, high = 15
// Output: 13, 14
// Input: arr[] = {1, 14, 11, 51, 15}, 
//        low = 50, high = 55
// Output: 50, 52, 53, 54 55
// Recommended: Please try your approach on {IDE} first, before moving on to the solution.
// Naive Approach:

// The naive approach for the problem can be to use two nested loops: one to traverse numbers from low to high and other one to traverse entire array to find out whether the element of the outer  loop exists in the array or not. If it doesn’t exist we will print it else continue to next iteration.


// Algorithm:

//    Traverse numbers from low to high using a for loop.
//    For each number i in the range, initialize a boolean variable found to false.
//    Traverse the array arr to check if i is present in the array.
//    If i is found in arr, set found to true and break out of the loop.
//    If i is not found in arr, print i.
//    Repeat steps 2-5 for all numbers in the range [low, high].
   



function FindMissingRange(arr){
    const missingRange = [];
    const HashMap = {};
    let Max = arr[arr.length-1]
    let Min = arr[0]

    for( const i of arr){
        if(!HashMap[i]){
            HashMap[i]= i;
        } 
        if(i > Max){
            Max = i
        }
        if(i < Min){
            Min = i
        }
    }

    for( let i = Min; i < Max; i++){
        if(!HashMap[i]){
            missingRange.push(i)
        }
    }
    return missingRange
}

const result = FindMissingRange([10,12,11,15])

console.log(result);
