function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
}