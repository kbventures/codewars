String.prototype.digit = function () {
    console.log(this)
    return /\d/.test(this) === true && this.length === 1
};