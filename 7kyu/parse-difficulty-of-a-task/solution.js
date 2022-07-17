function getDifficultyFromTask(task) {
    // your solution
    const regexx = /D:[0-9]{2}/g
    const regexx2 = /D:[0-9]{3}/g
    const dNumber = task.match(regexx)
    const dNumber2 = task.match(regexx2)
    console.log(dNumber)
    console.log(dNumber2)

    if (dNumber == null && dNumber2 == null) {
        return "Easy"
    }


    if (dNumber2 == null) {
        console.log('test')
        const test = dNumber[0]
        const tes2 = test.split('').join('')
        const test3 = Number(tes2.substring(2))
        console.log(test3)
        if (test3 < 11) {
            return "Easy"
        } else if (test3 < 21 && test3 > 10) {
            return "Medium"
        } else if (test3 > 20 && test3 < 30) {
            return "Hard"
        } else if (test3 >= 30) {
            return "IMPOSSIBLE"
        }
    } else {
        const test = dNumber2[0]
        const tes2 = test.split('').join('')
        const test3 = Number(tes2.substring(2))
        if (test3 < 11) {
            return "Easy"
        } else if (test3 < 21 && test3 > 10) {
            return "Medium"
        } else if (test3 > 20 && test3 < 30) {
            return "Hard"
        } else if (test3 >= 30) {
            return "IMPOSSIBLE"
        }
    }
}

// function getDifficultyFromTask(task) {
//     let [_, d] = task.match(/D:(\d+)/);
//     d = +d;
//     if (d <= 10) return 'Easy';
//     if (d <= 20) return 'Medium';
//     if (d <= 30) return 'Hard';
//     return 'IMPOSSIBLE';
//   }