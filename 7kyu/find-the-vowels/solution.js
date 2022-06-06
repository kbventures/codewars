function(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let result = []

    word.split('').forEach((e, i) => {
        vowels.includes(e) ? result.push(i + 1) : null;
    })

    return result;
} 