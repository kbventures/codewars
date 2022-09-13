// [4,6,10,1] => [4,6,1,10] => [4,1,6,10] => [1,4,6,10] 
function jaySort(array) {
    for (let i = 0; i < array.length; i++) { // i=4
        for (let j = 0; j < array.length - 1; j++) { // j=3
            if (array[j] > array[j + 1]) { // 4 > 1
                swap(array, j, j + 1)
            }
        }
    }
    return array
}  // space complexity = constant = O(1)