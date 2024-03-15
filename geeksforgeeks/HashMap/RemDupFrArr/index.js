// Remove duplicates from Sorted Array
// Given a sorted array arr[] of size N, the task is to remove the duplicate elements from the array.

// Examples: 

// Input: arr[] = {2, 2, 2, 2, 2}
// Output: arr[] = {2}
// Explanation: All the elements are 2, So only keep one instance of 2.

// Input: arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
// Output: arr[] = {1, 2, 3, 4, 5}

// V1 HashMap
// function RemDupFrSortArr(arr){
//     const HashMap =  {}
//     let result = []
//     for(let i of arr){
//         if(!HashMap[i]){
//             HashMap[i]=1
//         } else {
//             HashMap[i]++
//         }
//     }

//     for(let i of Object.keys(HashMap)){
//         result.push(Number(i))
//     }
//     return result;
// }

// const result = RemDupFrSortArr([1,2,3,4,4,5,5])
// console.log(result)

// V2 Two Pointers
function removeDuplicates(arr) {
    if (arr.length === 0) return [];

    let index = 0;
    console.log("starting array",arr)
    for (let i = 1; i < arr.length; i++) {
        console.log("Initial Loop index and i", index, i)
        if (arr[i] !== arr[index]) {
            console.log("arr[i] !== arr[index]", arr[i], arr[index])
            index++;
            arr[index] = arr[i];
            // console.log(index, arr[index], arr[i])
            // console.log("arr",arr)
        }
        console.log('Arr',arr)
    }

    // Trim the array to remove duplicates
    arr.length = index + 1;
    
    return arr;
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]);
console.log(result); // Output: [1, 2, 3, 4, 5]