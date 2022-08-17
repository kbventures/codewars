function capitalize(s) {
    const word = s.split('');
    const result = word.map(funcMap).join('');
    const result2 = word.map(funcMap2).join('');

    return [result, result2]
};
function funcMap(x, y) {
    if (y % 2 === 0) {
        return x.toUpperCase();
    } else {
        return x.toLowerCase();
    }
};
function funcMap2(x, y) {
    if (y % 2 !== 0) {
        return x.toUpperCase();
    } else {
        return x.toLowerCase();
    }
};