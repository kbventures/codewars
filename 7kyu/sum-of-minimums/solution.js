function sumOfMinimums(arr) {
    // your code here

    return arr.reduce((acc, e) => {
        return acc + Math.min(...e)
    }, 0)
}