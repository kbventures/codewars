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

// function same(arr, squaredArr) {
//     if (arr.length !== squaredArr.length) return false;
//     let obj = {};

//     for (let num of squaredArr) {
//         if (!obj[num]) {
//             obj[num] = 1;
//         } else {
//             obj[num]++
//         }
//     }

//     for (let num of arr) {
//         if (!obj[num * num]) return false;
//         obj[num * num]--
//     }
//     return true;
// }

/*Write function called same, which accepts two arrays. The function should return true if every value
in the array has it's corresponding value squared in the second array.  THe frequency of the values must be the same. */






// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     let obj1 = {}
//     let obj2 = {}

//     for (let key of arr1) {
//         obj1[key] ? obj1[key]++ : obj1[key] = 1;
//     }

//     for (let key of arr2) {
//         obj2[key] ? obj2[key]++ : obj2[key] = 1;
//     }

//     for (let key in obj1) {
//         if (!(key ** 2 in obj2)) {
//             return false;
//         }
//         if (obj1[key] !== obj2[key ** 2]) {
//             return false;
//         }
//     }

//     return true
// }




function same(arr1, arr2) {

}



console.log(same([4, 1, 2, 3], [16, 1, 4, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 3], [4, 4, 1])) // false(must be same frequency)