function findWaldo(crowd) {
    // Return y (row) and x (column) coordinates of Waldo ([0,0] is top-left)

    let result = {}
    for (let key of crowd) {
        for (let k of key) {
            result[k] ? result[k]++ : result[k] = 1
        }
    }

    let unique = Object.keys(result).find(key => result[key] === 1);

    for (let i = 0; i < crowd.length; i++) {
        for (let j = 0; j < crowd[i].length; j++) {
            if (crowd[i][j] === unique) {
                return [i, j]
            }
        }
    }
    return [y, x];
}