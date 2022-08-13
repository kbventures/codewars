String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    return this.split('').map(e => {
        return e.toLowerCase() === e.toUpperCase() ? e : e.toLowerCase() === e ? e.toUpperCase() : e.toLowerCase()
    }).join('')
}