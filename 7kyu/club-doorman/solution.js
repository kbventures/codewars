function passTheDoorMan(word) {
    let w = word.split('')
    for (let i = 0; i < w.length; i++) {
        if (word[i] === word[i + 1]) {
            let temp = word[i];
            return (temp.charCodeAt(0) - 96) * 3;
        }
    }
}