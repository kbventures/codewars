function stray(numbers) {
    let arr = numbers.sort();
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}

// function stray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//             return numbers[i];
//         }
//     }
// }

// function stray(numbers) {
//     let max = Math.max(...numbers);
//     let min = Math.min(...numbers);
//     return numbers.filter(i => i === max).length === 1 ? max : min;
// }
stray([1, 1, 1, 1, 2]);
stray([4, 4, 8, 4, 4, 1, 4, 8, 2, 2, 3, 3, 4, 5, 5]);  