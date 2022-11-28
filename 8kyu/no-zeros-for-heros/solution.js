function noBoringZeros(n) {
    // your code
    return Number(n.toString().replace(/0+$/, ""))
}