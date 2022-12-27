function diamondBurglar(locker) {
    let repetitions = 0;
    for (let i = 0; i < locker.length; i++) {
        // console.log(row)
        let j = 0;
        while (j < locker[i].length) {
            if (locker[i][j] === '*') {
                repetitions += 1;
                if (j + 1 < locker[i].length && locker[i][j + 1] === '*') {
                    j += 1;
                }
            }
            j += 1;
        }
    }
    return repetitions;
}
// function minRepetitions(locker) {
//     let repetitions = 0;
//     for (let row of locker) {
//       console.log(row)
//         let j = 0;
//         while (j < row.length) {
//             if (row[j] === '*') {
//                 repetitions += 1;
//                 if (j+1 < row.length && row[j+1] === '*') {
//                     j += 1;
//                 }
//             }
//             j += 1;
//         }
//     }
//     return repetitions;
// }

// console.log(minRepetitions(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**']))

console.log(diamondBurglar(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**']))