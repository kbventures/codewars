const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function swap(arr, i, j) {
    const temp = arr[i];    // 
    arr[i] = arr[j];
    arr[j] = temp;
}

// arr.length = N   O(N/2) = O(N) => time complexity is linear
// SPACE COMPLEXITY = N
// SPACE COMPLEXITY = N IN => 2N OUT => O(2N) => O(N)
// don't use Array.reverse, we want to implement reverse ourselves ;)
// reverse inline (not copy to reduce complexity)
function reverseArray(arr) {
    const middleIndex = Math.floor(arr.length / 2);
    for (let i = 0; i < middleIndex; i++) {
        swap(arr, i, arr.length - 1 - i)
    }
    return arr
}