function sumMul(n, m) {
    if (n >= m) return "INVALID";

    var sum = 0;
    for (var i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
}