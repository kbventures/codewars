function anagrams(word, words) {
    let count = word.split('').reduce((acc, e) => { return acc + e.charCodeAt(0) }, 0)
    return words.filter(e => count === e.split('').reduce((acc, e) => { return acc + e.charCodeAt(0) }, 0))
}