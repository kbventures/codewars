const quarterOf = (month) => {
    // Your code here

    if (month < 4) {
        return 1
    } else if (month < 7) {
        return 2
    } else if (month < 10) {
        return 3
    } else {
        return 4
    }
}

// alternative
const quarterOf = m => Math.ceil(m / 3);