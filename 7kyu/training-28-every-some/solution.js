function mirrorImage(arr) {
    var a, b;
    var result = arr.some((x, i) => {
        a = x, b = arr[i + 1];
        return x === Number(String(b).split('').reverse().join(''));
    });

    return result ? [a, b] : [-1, -1];
}

function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].toString().split('').reverse().join('') === arr[i + 1].toString()) {
            return [arr[i], arr[i + 1]];
        }
    }
    return [-1, -1]
}