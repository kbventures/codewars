function evenChars(string) {
    //keep coding!
    if (string.length > 100 || string.length < 2) return "invalid string"
    return string.split('').filter((e, i) => {
        if ((i + 1) % 2 === 0) return e
    })
}