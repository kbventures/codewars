function isIsogram(str) {
    //...
    console.log(str)
    if (str === "") return true

    let strToLowerCase = str.toLowerCase()

    let counter = 1;
    for (let i = 0; i < str.length; i++) {
        for (let j = counter; j < str.length; j++) {
            console.log('***')
            console.log(strToLowerCase[i], strToLowerCase[j])
            if (strToLowerCase[i] == strToLowerCase[j]) {
                console.log('test')
                return false;
            }
        }
        counter++
    }

    return true;
}