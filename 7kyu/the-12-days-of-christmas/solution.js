var comparator = function (a, b) {
    // Your code here
    if (a[0] === "a" || b[0] === "O") {
        return 1
    }
    if (a[0] === 'O' || b[0] === "a") {
        return -1
    }

    if (Number.parseInt(a) < Number.parseInt(b)) {
        return 1;
    }
    return -1
}