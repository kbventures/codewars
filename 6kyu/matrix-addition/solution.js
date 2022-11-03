function matrixAddition(a, b) {
    return a.map((n, i) => {
        return n.map((o, j) => {
            return o + b[i][j]
        });
    });
}