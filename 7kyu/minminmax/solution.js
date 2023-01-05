function minMinMax(array) {
    // solution goes here!

    let min = Math.min(...array)
    let max = Math.max(...array)
    console.log(array, min, max)
    let sortedArray = array.sort((a, b) => { return a - b })
    console.log(sortedArray)

    for (let i = min + 1; i < max; i++) {
        if (array.indexOf(i) === -1) return [min, i, max]
    }
}
