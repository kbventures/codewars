function solve(arr) {
    return arr.map(e => new Set(e).size).reduce((acc, e) => {
        return acc * e
    }, 1);
};