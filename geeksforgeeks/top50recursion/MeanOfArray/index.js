// To find the mean of the elements of the array. 

// Mean = (Sum of elements of the Array) /
//        (Total no of elements in Array)
// Examples: 

// Input : 1 2 3 4 5
// Output : 3

// Input : 1 2 3
// Output : 2
// To find the mean using recursion assume that the problem is already solved for N-1 ie you have to find for n

// Sum of first N-1 elements = 
//                  (Mean of N-1 elements)*(N-1)

// Mean of N elements = (Sum of first N-1 elements + 
//                       N-th elements) / (N)
// Note : Since array indexing starts from 0, we access N-th element using A[N-1].





// PREP
// Parameter is an array with at least one number
// Result is the mean result of an array of numbers
// Example: Array [1,2,3,4,5] retuns 3
// Pseudocode
// 1)Recursively call a function to get the sum of all the the numbers in the array
// 2)Return the result divided by the length of the array

// function meanOfAnArray(arr){
//     let result =0; 

//     function recursiveArrayTotal(i){
//         if(i == 0) return 
//         result = result + arr[i-1]
//         recursiveArrayTotal(i -1)
//     }
//     recursiveArrayTotal(arr.length)

//     return result / arr.length; 
// }


// console.log(meanOfAnArray([1,2,3,4,5]))



// Improved entry 
// function calculateMean(arr, index = arr.length - 1, sum = 0) {
//     if (index < 0) {
//         return sum / arr.length;
//     }
//     sum += arr[index];
//     return calculateMean(arr, index - 1, sum);
// }

// console.log(calculateMean([1, 2, 3, 4, 5]));



// 1 to n without loops

function rec1toN(num, i=1, result = ""){
    if(i === num) return result;
    updatedResult = i + " " + result;  
    console.log(updatedResult)
    rec1toN(num, i+1, updatedResult)
}

console.log(rec1toN(10))