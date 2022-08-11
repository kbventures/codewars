function maxMultiple(divisor, bound) {
    let result = 0;
    for (let i = 1; i <= bound; i++) {
        if (i % divisor == 0) {
            result = i;
        }
    }
    return result
}