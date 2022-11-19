function isPythagoreanTriple(integers) {
    // Good luck friends!
    let [a, b, c] = integers.sort((a, b) => { return a - b })
    return c ** 2 === a ** 2 + b ** 2;
}