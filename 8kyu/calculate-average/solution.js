function find_average(array) {
    return array.length === 0 ? 0 : (array.reduce((acc, e) => {
        return acc + e
    }, 0) / array.length)
}