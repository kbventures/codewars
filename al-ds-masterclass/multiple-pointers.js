// Write a function called sumZero which accepts a sorted array of integers.The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {

}



console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3] 
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined


// Solution

// Brute Force
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// function sumZero(arr) {
//     let left = 0;
//     let right = arr.length - 1;


//     while (left < right) {
//         let temp = arr[left] + arr[right]
//         if (temp === 0) {
//             return [arr[left], arr[right]]
//         } else if (temp > 0) {
//             right--
//         } else {
//             left++
//         }
//     }
// }




// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.


function countUniqueValues(arr) {
    if (arr.length == 0) return 0
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }

    return i + 1;
} // O(n) Time

function countUniqueValues(arr) {
    return new Set(arr).size;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4