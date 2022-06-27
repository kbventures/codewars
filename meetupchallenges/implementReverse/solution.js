'use strict'

function reverse(arrayOrObject) {

    if (Array.isArray(arrayOrObject)) {
        return arrayOrObject.map((e, i, a) => a[a.length - 1 - i])
    }


    if (typeof arrayOrObject === 'object') {

        let newObject = {}
        let reversedObject = Object.keys(arrayOrObject).map((e, i, a) => a[a.length - 1 - i])
        reversedObject.forEach((i) => {
            newObject[i] = arrayOrObject[i];
        })
        return newObject;
    }

    return new Error("Not an array or object!")
}

const result1 = reverse([1, 2, 3])
const result2 = reverse({ e: 1, i: true, z: [1, 2, 3] })

console.log(result1)
console.log(result2)



