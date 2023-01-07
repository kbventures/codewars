function wordsToMarks(string) {
    //your code here
    return string.split('').reduce((acc, e, i) => {
        return acc + (e.charCodeAt() - 96)
    }, 0)
}