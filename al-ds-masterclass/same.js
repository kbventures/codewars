// function allAreEqual(obj) {
//     return new Set(Object.values(obj)).size === 1;
// }


// function same(arr) {
//     let result = {}
//     if (arr[0].length !== arr[1].length) return false;

//     for (let i = 0; i < arr[0].length; i++) {
//         let temp = arr[0][i] * arr[0][i]
//         for (let j = 0; j < arr[0].length; j++) {
//             if (temp == arr[1][j]) {
//                 result[temp] ? result[temp]++ : result[temp] = 1
//             }
//         }
//     }

//     console.log(allAreEqual(result))
//     return allAreEqual(result)
//}


// frequency counter pattern

function same(arr, squaredArr) {
    if (arr.length !== squaredArr.length) return false;
    let obj = {};

    for (let num of squaredArr) {
        if (!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num]++
        }
    }

    for (let num of arr) {
        if (!obj[num * num]) return false;
        obj[num * num]--
    }
    return true;
}




console.log(same([1, 2, 3], [4, 1, 9])) // true
same([1, 2, 3], [1, 9]) // false
console.log(same([1, 2, 3], [4, 4, 1])) // false(must be same frequency)