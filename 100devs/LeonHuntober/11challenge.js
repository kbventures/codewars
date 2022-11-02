function last(x) {
    return x.split(' ').sort((a, b) => {
        return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    })
}