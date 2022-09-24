function sortMyString(S) {
    // your code here
    return S.split('').reduce((acc, e, i) => {
        if (i % 2 === 0) acc += e;
        return acc;
    }, "") + " " + S.split('').reduce((acc, e, i) => {
        if (i % 2 !== 0) acc += e;
        return acc;
    }, "")
}