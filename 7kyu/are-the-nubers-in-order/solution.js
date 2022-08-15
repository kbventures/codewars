// PREP
//
// Parameter arra is an array of integers.  You may assume at all inputs are valie. Ie: non-empty arrays containing only
// integers. 
// Returns true if the numbers in the given array are in ascending order, otherwise it returns false.
// If arr as a length of 1 it will return true.
// Example [2,1,3] returns false.
// Pseucocde:  check if arr lenght is equal to one, if so, return true
// Look through the array and compare the first and last number to see if they are ascending.  Return false if at
// any moment this is false. Stop looping and comparing at the index before the last one.
// If no false values are found while looking return a true boolean. 

function inAscOrder(arr) {
    console.log(arr)
    let result = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false
    }
    return result;
}