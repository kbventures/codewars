function makeString(s) {
    // ...
    return s.split(" ").map(e => {
        return e[0]
    }).join('')
}