function factorial(n) {
    if (n < 0) return null;
    if (n <= 1) return 1
    return n * factorial(n - 1)
}