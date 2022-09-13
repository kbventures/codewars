// quick sort, insertion sort, 
// bubble sort,
// merge sort, 
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1)
//             }
//         }
//     }
//     return arr
// }



// let's make this cool with bubbles 
// ˭̡̞(◞˃ᆺ˂)◞ ₎₎=͟͟͞͞˳˚॰°ₒ৹๐

// quick sort, insertion sort, 
// bubble sort,
// merge sort, 
function bubbleSort(arr) {
    let bubbled = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                bubbled = true
            }
        }
        if (!bubbled) {
            return arr
        }
    }
    return arr
}

// Time complexity
// best case: already sorted array => n => O(n)
// average case: n/2 * n => (n^2 / 2) => O(n^2)
// worst case: O(n^2)