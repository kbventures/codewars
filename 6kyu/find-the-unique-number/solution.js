function findUniq(arr) {
    // do magic
    let result = {}
    for (let key of arr) {
        result[key] ? result[key]++ : result[key] = 1
    }
    for (let key in result) {
        if (result[key] === 1) return Number(key)
    }
}