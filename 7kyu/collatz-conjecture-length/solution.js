function collatz(n) {
    //your code here
    let result = [n]
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2
            result.push(n)
        } else {
            n = (n * 3) + 1
            result.push(n)
        }
    }
    return result.length;
}