function noSpace(x) {
    return (x.split('').filter(e => { return e !== " " }).join(''))
}