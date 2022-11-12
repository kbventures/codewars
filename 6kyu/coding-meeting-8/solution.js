function allContinents(list) {
    // thank you for checking out the Coding Meetup kata :)
    let result = {}

    list.forEach(e => {
        result[e.continent] ? result[e.continent]++ : result[e.continent] = 1
    })

    return ("Africa" in result && "Americas" in result && "Asia" in result && "Europe" in result && "Oceania" in result)
}

// Alternative Solutions
// 1
function allContinents(list) {
    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x == y.continent));
}

// 2
const allContinents = arr => new Set(arr.map(dev => dev.continent)).size === 5;

// 3
function allContinents(list) {
    const continents = list.map(x => x.continent)
    return continents.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
}

