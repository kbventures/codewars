function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}
function total(arr) {
    if (arr.length === 0) return 0
    return arr.reduce((acc, e, i) => {
        if (isPrime(i)) return acc + e
        return acc;
    }, 0)

};