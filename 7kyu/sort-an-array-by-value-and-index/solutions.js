function sortByValueAndIndex(array) {
    return array.map((e, i) => [e, e * (i + 1)]).sort((a, b) => a[1] - b[1]).map(e => e[0])
}