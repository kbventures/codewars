// Find Union and Intersection of two unsorted arrays
// Given two unsorted arrays that represent two sets (elements in every array are distinct), find the union and intersection of two arrays.

// Example: 

// arr1[] = {7, 1, 5, 2, 3, 6} 
// arr2[] = {3, 8, 6, 20, 7} 

// Then your program should print Union as {1, 2, 3, 5, 6, 7, 8, 20} and Intersection as {3, 6, 7}. Note that the elements of union and intersection can be printed in any order.


// Intersection: common in both arrays
// Union unique elemeents in both arrays

function unionIntersectionTwoUnsortedArr(arr1,arr2){
    let union;
    let intersection;
    // Union
    union = [...new Set([...arr1,...arr2])];

    // Intersection
    intersection = arr1.filter(ele => arr2.includes(ele))

    return [union, intersection]
}

const [result1, result2] = unionIntersectionTwoUnsortedArr([7, 1, 5, 2, 3, 6],[3, 8, 6, 20, 7])


console.log(result1)
console.log(result2)