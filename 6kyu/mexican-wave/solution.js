function wave(string) {
    let waveArray = [];
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        if (letter === " ") {
            continue;
        } else {
            waveArray.push(string.slice(0, i) + letter.toUpperCase() + string.slice(i + 1))
        }
    }
    return waveArray;
}