function largest(n, xs) {
    // Find the n highest elements in a list
    if (n === 0) return []
    let sortedXs = xs.sort((a, b) => a - b)
    let result = sortedXs.slice(-n)
    return xs.sort((a, b) => a - b).slice(-n)
}

function largest(n, xs) {
    return n ? xs.sort(function (a, b) { return a - b; }).slice(-n) : [];
}