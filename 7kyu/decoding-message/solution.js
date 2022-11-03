function decode(string) {
    var code = { "a": "z", "A": "Z", "b": "y", "B": "y", "c": "x", "C": "X", "d": "w", "D": "W", "e": "v", "E": "V", "f": "u", "F": "U", "g": "t", "G": "T", "h": "s", "H": "S", "i": "r", "I": "R", "j": "q", "J": "Q", "k": "p", "K": "P", "l": "o", "L": "O", "m": "n", "M": "N", "n": "m", "N": "M", "o": "l", "O": "L", "p": "k", "P": "K", "q": "j", "Q": "J", "r": "i", "R": "I", "s": "h", "S": "H", "t": "g", "T": "G", "u": "f", "U": "F", "v": "e", "V": "E", "w": "d", "W": "D", "x": "c", "X": "C", "y": "b", "Y": "B", "z": "a", "Z": "A", "ä": "ß", "Ä": "ẞ", "ö": "ü", "Ö": "Ü", "ü": "ö", "Ü": "Ö", "ß": "ä", "ẞ": "Ä" };
    return Array.from(string, c => code[c] || c).join('');
}

function decode(message) {
    let obj = {
        "a": "z",
        "b": "y",
        "c": "x",
        "d": "w",
        "e": "v",
        "f": "u",
        "g": "t",
        "h": 's',
        "i": "r",
        "j": "q",
        "k": "p",
        "l": "o",
        "m": "n",
        "n": "m",
        "o": "l",
        "p": "k",
        "q": "j",
        "r": "i",
        "s": "h",
        "t": "g",
        "u": "f",
        "v": "e",
        "w": 'd',
        "x": "c",
        "y": "b",
        "z": "a",
        " ": " "
    }
    return message.split('').map(el => {
        for (const str in obj) {
            if (el === str)

                return obj[str]

        }
    }).join('')
}