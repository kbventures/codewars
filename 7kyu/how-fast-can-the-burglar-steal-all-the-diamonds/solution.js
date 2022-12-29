function diamondBurglar(locker) {
    let repetitions = 0;
    for (let i = 0; i < locker.length; i++) {
        for (let j = 0; j < locker[i].length; j++) {
            if (locker[i][j] === '*') {
                repetitions += 1;
                if (locker[i][j + 1] === '*') {
                    j += 1;
                }
            }
        }
    }
    return repetitions;
}

console.log(diamondBurglar(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**']))