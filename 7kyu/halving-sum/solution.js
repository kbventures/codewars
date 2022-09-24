function halvingSum(n) {

    let counter = n;
    let current = n;

    while (current > 0) {
        current = Math.floor(current / 2)
        counter += current
    }

    return counter;
}