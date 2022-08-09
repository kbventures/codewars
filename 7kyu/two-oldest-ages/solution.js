// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    const result = ages.sort(function (a, b) { return a - b })
    return [result[result.length - 2], result[result.length - 1]]
}