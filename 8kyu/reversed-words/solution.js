function reverseWords(str) {
    //   return str.split(' ').reverse().join(' '); // reverse those words
    return str.split(' ').map((e, i, a) => {
        return a[a.length - 1 - i]
    }).join(' ')
}