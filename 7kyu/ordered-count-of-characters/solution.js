function orderedCount(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < result.length; j++) {
            if (result[j][0] === str[i]) {
                count++;
            }
        }
        if (count === 0) {
            for (let j = i; j < str.length; j++) {
                if (str[j] === str[i]) {
                    count++;
                }
            }
            result.push([str[i], count]);
        }
    }
    return result;
}
orderedCount('ssup');  // [['s', 2], ['u', 1], ['p', 1]]
orderedCount('bro?');  // [['b', 1], ['r', 1], ['o', 1], ['?', 1]]