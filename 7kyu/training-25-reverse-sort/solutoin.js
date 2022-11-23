function sortIt(arr) {
    return arr.slice().sort((a, b) => {
        let countA = arr.filter(v => v === a).length
        let countB = arr.filter(v => v === b).length
        if (countA === countB) { return b - a }
        else if (countA > countB) { return 1 }
        else { return -1 }
    })
}

