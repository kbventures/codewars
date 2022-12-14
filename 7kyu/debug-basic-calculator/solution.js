const calculate = (a, op, b) => {
    switch (op) {
        case "+": return a + b
        case "-": return a - b
        case "*": return a * b
        case "/": return b ? a / b : null
    }

    return null
}