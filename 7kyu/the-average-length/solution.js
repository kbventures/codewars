function averageLength(arr) {
    const averageLength = Math.round(arr.join('').length / arr.length)
    return arr.map(e => e[0].repeat(averageLength))
}