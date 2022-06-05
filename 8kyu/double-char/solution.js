function doubleChar(str) {
    // Your code here

    return (str.split('').map(e => {
        return e + e
    })).join('')
}