function solve(s) {
    //..
    let lc = 0;
    let hc = 0;
    console.log(s)

    s.split("").forEach(e => {
        if (e === e.toUpperCase()) {
            hc++
        } else {
            lc++
        }
    })
    if (lc === hc) return s.toLowerCase()
    return lc > hc ? s.toLowerCase() : s.toUpperCase()
}