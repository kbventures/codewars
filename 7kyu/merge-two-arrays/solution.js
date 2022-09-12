function mergeArrays(a, b) {
    let result = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if (i < a.length) {
            result.push(a[i]);
        }
        if (i < b.length) {
            result.push(b[i]);
        }
    }
    return result;
}