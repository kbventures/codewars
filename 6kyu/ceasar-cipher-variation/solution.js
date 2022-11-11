// key larger than 26 can be thought about as key = key % 26.
// the key should be increased by 1 with every word in a phrase
function encryptWord(word, sht, index) {
    let encryptedWord = "";
    let key = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26,
    }

    let key1 = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10': 'j',
        '11': 'k',
        '12': 'l',
        '13': 'm',
        '14': 'n',
        '15': 'o',
        '16': 'p',
        '17': 'q',
        '18': 'r',
        '19': 's',
        '20': 't',
        '21': 'u',
        '22': 'v',
        '23': 'w',
        '24': 'x',
        '25': 'y',
        '26': 'z',
    }

    let currentShift = sht + index
    for (let j = 0; j < word.length; j++) {
        let tempShift = currentShift + key[word[j]]
        if (tempShift > 26) {
            tempShift = tempShift % 26
        }

        if (tempShift === 0) {
            tempShift = 26;
        }

        // let encryptedLetter = // find 
        console.log(key1[tempShift])
        console.log(tempShift)
        encryptedWord = encryptedWord + key1[tempShift]
    }

    return encryptedWord
}


function caesarEncode(phrase, shift) {
    // console.log(phrase)
    // console.log(shift)
    let p = phrase.split(' ')
    let result = []
    for (let i = 0; i < p.length; i++) {
        let eWord = encryptWord(p[i], shift, i)
        result.push(eWord);
    }
    return result.join(' ');
}



// console.log(caesarEncode('vncqupb vxgel nvijd rubjbuxfe bafkf aqhissg lypubwfe', 138))
//  dvkycxj egpnu xfstn cfmumfiqp nmrwr nduvfft zmdipkts
// 

// console.log(caesarEncode('aepkz wtvu', 151))
console.log(caesarEncode('aepkz', 151))

// vzkfu sprq




// Alternative
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function caesarEncode(phrase, shift) {
    return phrase.split(' ').map((word, i) => shifter(word, shift + i)).join(' ')
}


const caesarEncode = (phrase, shift) => phrase.split(" ").map(word => encryptWord(word, shift++)).join(" ");

const encryptWord = (word, shift) => word.replace(/[a-z]/g, letter => encryptLetter(letter, shift));

const encryptLetter = (letter, shift) => String.fromCharCode((letter.charCodeAt(0) - 97 + shift) % 26 + 97);