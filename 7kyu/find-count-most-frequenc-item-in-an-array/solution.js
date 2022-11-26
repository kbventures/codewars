function mostFrequentItemCount(collection) {
    // Do your magic. :)
    if (collection.length == 0) return 0
    let result = {}
    for (let key of collection) {
        result[key] ? result[key]++ : result[key] = 1
    }
    let theKey = Object.keys(result).reduce((a, b) => (result[a] > result[b]) ? a : b);
    return result[theKey]

}

function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;

    var count = Object.create(null);

    collection.forEach(item => {
        count[item] = (count[item] || 0) + 1;
    });

    return Math.max(...Object.values(count));
}