// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// naive solution
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let temp = arr[i] + arr[j]
//             if (temp === 0) return [arr[i], arr[j]]
//         }
//     }
// }




function sumZero(arr) {

}







console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3] 
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined