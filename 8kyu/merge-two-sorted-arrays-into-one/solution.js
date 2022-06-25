// PREP
//
// Parameters: arr1 and arr2 contains an array of numbers
//
// Function returns arr1 and arr2 concatenated and sorted in ascending order with duplicates numberes removed


function mergeArrays(arr1, arr2) {
    //Pseudo code:
    // Concatenate the 2 arrays, sort them in ascending order, remove duplicates and then return final result
    //   let mergedIntegers = arr1.concat(arr2)
    //   let ascendingSortedIntegers = mergedIntegers.sort(function(a, b){return a-b})  
    //   let uniqueChars = [...new Set(ascendingSortedIntegers)];
    return [...new Set(arr1.concat(arr2).sort(function (a, b) { return a - b }))];
}

    // Example mergeArrays([1,1,4,3],[5,6,6,2]) returns [1,2,3,4,5,6]