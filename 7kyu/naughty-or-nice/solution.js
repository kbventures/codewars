const naughtyOrNice = (data) => {
    let naughtyMeter = 0

    for (const month in data) {
        for (const day in data[month]) {
            naughtyMeter += data[month][day] === "Nice" ? 1 : -1
        }
    }

    return naughtyMeter < 0 ? "Naughty!" : "Nice!"
}

function naughtyOrNice(data) {
    let count = 0;
    for (let month in data) {
        [data[month]].map(v => Object.values(v).map(v => v === "Naughty" ? count-- : count++))
    }
    return count >= 0 ? "Nice!" : "Naughty!"
}