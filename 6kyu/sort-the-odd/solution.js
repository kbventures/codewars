function sortArray(array) {
    let filterOdd = array.filter(e => e % 2 !== 0)
    let odd = filterOdd.sort((a, b) => a - b)
    let even = array.map(e => {
        if (e % 2 === 0) return e
        return null
    })
    return even.map((e, i) => {
        if (e === null) {
            let temp = odd[0]
            odd.shift()
            return temp;
        }
        return e
    })
}


// Alternate Solutions
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}