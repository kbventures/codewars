
function rowWeights(array) {
    //your code here
    let r1 = 0;
    let r2 = 0;
    //   console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            r2 += array[i]
        } else {
            r1 += array[i]
        }
    }
    return [r1, r2]
}