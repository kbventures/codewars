String.prototype.capitalize = function () {
    let code = this.charCodeAt(0)
    if (code > 96 && code < 123) {
        code -= 32
    }
    return String.fromCharCode(code) + this.slice(1)
}
