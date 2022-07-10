
function squareSum(numbers) {
    return numbers.reduce((acc, e) => {
        return e * e + acc;
    }, 0)
}