var isSquare = function (arr) {
    return (arr.length) ? arr.every(x => Math.sqrt(x) % 1 == 0) : undefined;
}