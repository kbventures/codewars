// function findIndexOfMinBuiltIn(arr, lower, upper) {
//     arr = arr.slice(lower, upper + 1)
//     return arr.indexOf(Math.min(...arr))
// }

// Get the index of the smallest number between the lower and upper indexes
// function findIndexOfMinBrute(arr, lower, upper) {
//   let indexOfMin = lower
//   for (let i = lower + 1; i < upper; i++) {
//       let currIndex = i
//       let curr = arr[i]
//       if (curr < lowest) {
//           indexOfMin = currIndex
//       }
//   }
//   return indexOfMin
// }



function findMinIndex(array, lower, upper) {
  let minIdx = lower;
  for (let i = lower + 1; i <= upper; i++) {
    if (arr[i] < arr[minIdx]) {
      minIdx = i;
    }
  }
  return minIdx;
}

function selectionSort(arr) {
  // loop through array with index i
  for (let i = 0; i < arr.length; i += 1) {
    // find the minIdx from i to length - 1
    const minIdx = findMinIndex(arr, i, arr.length - 1)
    // minIdx is the smallest of all unsorted

    // if i !== minIdx
    if (i !== minIdx) {
      // swap them
      swap(arr, i, minIdx)
    }
  }
  // return array
  return array
}

// Time complexity
// all case: n + n-1 + n-2 + n-3 ... 1
// O(n^2)