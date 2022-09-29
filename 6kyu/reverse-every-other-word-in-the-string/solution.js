function reverse(str) {
    //WRITE SOME MAGIC
    return temp = str.trim().split(' ').filter(e => {
        return e !== ""
    }).map((e, i) => {

        if (i % 2 !== 0) return e.split('').reverse().join('')
        return e
    }).join(' ')
}