function power(b, e) {
    if (e === 0) {
        return 1
    }
    return power(b, e - 1) * b;
}