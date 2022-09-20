function convertHashToArray(hash) {
    //your code here - sort the keys!
    let result = []
    for (let key in hash) {
        let temp = [key, hash[key]]
        result.push(temp)
    }
    return result.sort();
}

// const convertHashToArray = o => Object.entries(o).sort();