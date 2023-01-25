function arr2bin(arr) {
    // show me the code
    return arr.reduce((a, e) => {
        if (typeof e === 'number') {
            return a + e
        }
        return a

    }, 0).toString(2)
}