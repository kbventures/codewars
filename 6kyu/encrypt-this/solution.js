var encryptThis = function (text) {
    // Implement me! :)
    return text.split(' ').map(e => {
        if (e.length === 1) {
            return String(e.charCodeAt(0))
        } else if (e.length === 2) {
            return e[0].charCodeAt() + e[1]
        } else {
            return String(e[0].charCodeAt()) + e.slice(-1) + e.slice(2, e.length - 1) + e[1]
        }
    }).join(' ')

}