function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    // your code
    let result = 0
    Object.values(arguments).forEach(val => {
        result += val * val;
    });
    return Math.floor((Math.sqrt(result) / 2))
}