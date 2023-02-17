var countWords = function (words1, words2) {
    let cacheW1 = {}
    let cacheW2 = {}
    let result = 0;
    // console.log(words1,words2)


    for (let key of words1) {
        cacheW1[key] ? cacheW1[key]++ : cacheW1[key] = 1
    }
    for (let key of words2) {
        cacheW2[key] ? cacheW2[key]++ : cacheW2[key] = 1
    }

    // console.log("1",cacheW1)
    // console.log("2",cacheW2)

    for (let key in cacheW1) {
        console.log(key)
        if (cacheW1[key] === 1 && cacheW2[key] === 1) {
            result++
        }
    }
    return result;

};