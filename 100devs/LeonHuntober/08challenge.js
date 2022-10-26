function nthSmallest(arr, pos) {
    //your code here
    return arr.sort((a, b) => {
        return a - b
    })[pos - 1]
}