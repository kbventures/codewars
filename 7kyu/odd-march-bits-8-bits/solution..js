function bitMarch(n) {
    console.log("n", n);
    var arr = [];
    for (var i = 7; i >= n - 1; i--) {
        var result = [0, 0, 0, 0, 0, 0, 0, 0];
        for (var j = 0; j < n; j++) {
            result[i - j] = 1;
        }
        arr.push(result);
    }
    return arr;
}