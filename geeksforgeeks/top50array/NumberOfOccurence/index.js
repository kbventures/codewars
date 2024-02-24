// Count number of occurrences (or frequency) in a sorted array
// Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 

// Examples: 
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
//   Output: 4 // x (or 2) occurs 4 times in arr[]
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 3
//   Output: 1 
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 1
//   Output: 2 
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 4
//   Output: -1 // 4 doesn't occur in arr[] 


// o(n)
// function NumOfOcc(arr,num){

// let result =0; 
//     for(let i =0; i< arr.length;i++){
//         if(arr[i] == num) result++
// }

// return result; 
// }

// const result = NumOfOcc([1,2,2,2,2,3],2)
// console.log(result)


// Binanry search O(log n)
function NumOfOcc(arr, num) {
    // Function to find the first occurrence of num using binary search
    function findFirstOccurrence() {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] === num) {
                result = mid;
                high = mid - 1; // Search in the left half for the first occurrence
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }

    // Function to find the last occurrence of num using binary search
    function findLastOccurrence() {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] === num) {
                result = mid;
                low = mid + 1; // Search in the right half for the last occurrence
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }

    const firstOccurrence = findFirstOccurrence();
    const lastOccurrence = findLastOccurrence();

    if (firstOccurrence === -1 || lastOccurrence === -1) {
        return -1; // Number not found in the array
    }

    return lastOccurrence - firstOccurrence + 1; // Number of occurrences
}

const result = NumOfOcc([1, 1, 2, 2, 2, 2, 3], 2);
console.log(result); // Output: 4
