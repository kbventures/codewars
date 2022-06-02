function getDivisorsCnt(n) {
    let numDiv = 0;
    for (let i = 0; i < n; i++) {
        (n % (i + 1) === 0) ? numDiv++ : null;
    }
    return numDiv;
}