/**
 * @param {number} n
 * @return {number}
 */
var fib = function (N) {
    if (N === 0 || N === 1) return N;

    let first = 0, second = 1;
    let sum = first + second;

    for (let i = 2; i < N; i++) {
        first = second;
        second = sum;

        sum = first + second;
    }

    return sum
};

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let result = [0, 1]
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result[n]
};