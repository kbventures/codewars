Array.prototype.filter = function (fn) {
    var res = [];
    for (var i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            res.push(this[i]);
        }
    }
    return res;
}