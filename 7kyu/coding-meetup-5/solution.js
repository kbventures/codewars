function countLanguages(list) {
    count = {};
    list.forEach((x) => {
        count[x.language] ? count[x.language]++ : count[x.language] = 1
    })
    return count;
}