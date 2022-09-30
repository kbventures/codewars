function numObj(s) {
    let arr = []


    for (let i = 0; i < s.length; i++) {
        let obj = {}
        let b = s[i].toString()
        obj[b] = String.fromCharCode(s[i])
        arr.push(obj)

    }

    return arr

}

function numObj(s) {
    return s.map(n => {
        return { [n]: String.fromCharCode(n) };
    });
}