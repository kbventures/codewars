//PREP
// Parameters: And Array of sorted item items in this case numbers and a number to look up
// Returns true if found and false if not found
// Example: BinarySearch([0,1,2,3],3) return true while BinarySearch([0,1,2,3],4) returns false
// PseudoCode:
// Define a beginning and end index based on array size 
// Loop through the array always starting from a dynamic middle that checks if vallue exisit if not repeat process to the left or right
// depending on wether the current number is greater and lesser than the number we are searching
// Return true is number found or false if not


function binarySearch(arr,ele){
let start = 0;
let finish = arr.length -1; 

while(start <= finish){
    let currMid = Math.floor((finish + start) / 2)

    if(arr[currMid]== ele){
        return true
    } else if(arr[currMid] > ele){
        finish = currMid - 1
    } else {
        start = currMid + 1
    }

}
// Return False by default
return false; 
}

const result = binarySearch([1,2,3,4,5,6,7,8],3)

console.log(result);









































// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         let midElement = arr[mid];

//         if (midElement === target) {
//             return mid;  // Target found, return its index
//         } else if (midElement < target) {
//             low = mid + 1;  // Target is in the right half
//         } else {
//             high = mid - 1;  // Target is in the left half
//         }
//     }

//     return -1;  // Target not found in the array
// }

// // Example usage:
// const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const targetValue = 5;

// const result = binarySearch(sortedArray, targetValue);

// if (result !== -1) {
//     console.log(`Target ${targetValue} found at index ${result}.`);
// } else {
//     console.log(`Target ${targetValue} not found in the array.`);
// }