function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((acc, e) => {
        return acc + Number(e)
    }, 0)
}