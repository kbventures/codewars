Array.range = function (start, count) {
    return Array.apply(null, Array(count)).map(function (e, i) {
        return start + i;
    });
}

Array.prototype.sum = function () {
    return this.reduce(function (prev, next) {
        return prev + next;
    }, 0);
}

Array.range = function (start, count) {
    return Array.from({ length: count }, (_, i) => i + start)
}

Array.prototype.sum = function () {
    return this.reduce((sum, current) => sum + current, 0)
}