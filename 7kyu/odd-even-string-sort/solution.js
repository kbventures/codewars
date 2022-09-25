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

// const sortMyString = s => {
//     let even = s.split('').filter((v, i) => i % 2 === 0).join('')
//     let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
//     return even + ' ' + odd
// }