function highestRank(arr) {
    //Your Code logic should written here

    let result = {}
    let minValue = 0;

    for (let key of arr) {
        result[key] ? result[key]++ : result[key] = 1
    }
    for (let key in result) {
        if (result[key] > minValue) {
            minValue = result[key]
        }
    }
    let keys = Object.keys(result).filter(key => result[key] === minValue);
    let forTheWin = keys.map(e => (Number(e)))
    return Math.max(...forTheWin)
}