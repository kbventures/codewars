const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function swap(arr, i, j) {
    const temp = arr[i];    // 
    arr[i] = arr[j];
    arr[j] = temp;
}

function swap(array, i, j) {
    [array[j], array[i]] = [array[i], array[j]]

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

/*
Say you want to reverse the array below:
[1, 2, 3, 4, 5]

One approach would be create a "new" array which will be empty initially and you start filling it with elements in reverse order using the original array. So now you have two arrays.
original = [1, 2, 3, 4, 5]
reversed=[5, 4, 3, 2, 1]

This is called linear or O(n) space complexity because as the original array grows your reversed array also grows proportionally.

The second approach would be to reverse the array "in place".  This means that you reverse the original array without creating a new array.
So you start with [1, 2, 3, 4, 5] and maybe swap elements until you have [5, 4, 3, 2, 1].  Since you didn't create a new array this is constant space


The question would be demonstrate improving space complexity efficacy?


This is making the space complexity of reversing an array more efficient
Time complexity is the same in both of the above examples: O(n)

*/