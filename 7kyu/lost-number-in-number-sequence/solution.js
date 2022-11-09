function findDeletedNumber(arr, mixArr) {
    // your code
    let sorted = mixArr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) { return arr[i] }
    }
    return 0;
}