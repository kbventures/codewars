// Switch and map

function decode(string) {
    let arr = [...string];
    let newArr = arr.map((item) => {
        switch (item) {
            case '0': return item = '5';
            case '1': return item = '9';
            case '2': return item = '8';
            case '3': return item = '7';
            case '4': return item = '6';
            case '5': return item = '0';
            case '6': return item = '4';
            case '7': return item = '3';
            case '8': return item = '2';
            case '9': return item = '1';
        }
    });
    return newArr.join('');
}

function decode(string) {
    let result = ""
    let encryptionKey = {
        '0': '5',
        '1': '9',
        '2': '8',
        '3': '7',
        '4': '6',
        '5': '0',
        '6': '4',
        '7': '3',
        '8': '2',
        '9': '1'
    }

    return [...string].map(e => {
        return encryptionKey[e]
    }).join('')

}