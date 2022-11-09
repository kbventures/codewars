function swap(word) {
    if (word.length < 4) return word;


    if (word.length % 2 != 0) { // volcano

        let middle = word[Math.floor(word.length / 2)]
        let left = word.slice(0, Math.floor(word.length / 2))
        let right = word.slice(Math.ceil(word.length / 2), word.length)
        return left.split('').reverse().join('') + middle + right.split('').reverse().join('')
    } else {
        console.log(word)
        let left = word.slice(0, word.length / 2)
        console.log(left)
        let right = word.slice(word.length / 2, word.length - 1 + 1)
        console.log(right)
        console.log('*******')
        return left.split('').reverse().join('') + right.split('').reverse().join('')
    }

}

function insideOut(words) {
    return words.split(' ').map(e => swap(e)).join(' ')
}