function matrixAddition(a, b) {
    return a.map((n, i) => {
        return n.map((o, j) => {
            return o + b[i][j]
        });
    });
}

function matrixAddition(a, b) {
    var c = [];
    for (var n = 0; n < a.length; n++) {
        c[n] = [];
        for (var m = 0; m < a[n].length; m++) {
            c[n][m] = a[n][m] + b[n][m];
        }
    }
    return c;
}

