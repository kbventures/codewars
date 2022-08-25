String.prototype.isUpperCase = function () {
    const re = /([a-z]+)/g;
    return !re.test(this)
}