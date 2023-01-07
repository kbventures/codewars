function consonantCount(str) {
    // ...
    let temp0 = ['a', 'e', 'i', 'o', 'u']
    let result = 0;
    for (let key of str) {
        let temp = key.toLowerCase()
        if (temp.charCodeAt() > 96 && temp.charCodeAt() < 123) {
            console.log('test1')
            if (!temp0.includes(key)) {
                result++
            }
        }
    }
    return result;
}