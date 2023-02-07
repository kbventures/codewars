/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let cache = {}
    for (let key of s) {
        cache[key] ? cache[key]++ : cache[key] = 1
        if (cache[key] === 2) {
            return key
        }
    }
};