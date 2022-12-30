function freqSeq(str, sep) {
    let result = {}
    for (let key of str) {
        result[key] ? result[key]++ : result[key] = 1
    }
    let tada = []
    for (let i = 0; i < str.length; i++) {
        tada.push(result[str[i]])
    }
    return tada.join(sep)
}