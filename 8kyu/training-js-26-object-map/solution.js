function isolateIt(arr) {
    return arr.map(v => {
        if (v.length % 2 == 0) { return v.slice(0, v.length / 2) + '|' + v.slice(v.length / 2) };
        if (v.length % 2 !== 0) { return v.slice(0, v.length / 2) + '|' + v.slice((v.length / 2) + 1) };
    })
}