function digitalRoot(n) {
    // ...
    if (String(n).length === 1) return n
    let sum = String(n).split('').reduce((a, b) => Number(a) + Number(b), 0)

    return digitalRoot(Number(sum))
}