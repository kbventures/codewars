// return the magic index
function findMagic(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr[i]) return i
    }
    return -1
}

const findMagic = arr => arr.find((x, i) => x === i) || -1;

const findMagic = arr =>
    arr.findIndex((val, idx) => val === idx);