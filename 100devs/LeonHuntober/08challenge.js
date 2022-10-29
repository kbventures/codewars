function nthSmallest(arr, pos) {
    //your code here
    return arr.sort((a, b) => {
        return a - b
    })[pos - 1]
}

//  arr.indexOf(val)
function linearSearchIndexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}