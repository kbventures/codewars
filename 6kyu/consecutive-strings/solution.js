function longestConsec(strarr, k) {
    let longuest = ""
    for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
        let temp = strarr.slice(i, i + k).join('')
        if (temp.length > longuest.length) {
            longuest = temp
        }
    }
    return longuest;
}