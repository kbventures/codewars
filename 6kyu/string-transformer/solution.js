function stringTransformer(str) {
    // Your code here
    return str.split('').map((e, i) => {
        if (e.toUpperCase() !== e.toLowerCase()) {

            if (e.toUpperCase() === e) {
                return e.toLowerCase()
            }
            else {
                return e.toUpperCase()
            }
        }

        return e
    }).join('').split(' ').reverse().join(' ')
}

// solution
function stringTransformer(str) {
    return str
        .split(' ')
        .reverse()
        .join(' ')
        .split('')
        .map(v => v == v.toUpperCase() ?
            v.toLowerCase() :
            v.toUpperCase())
        .join('');
}