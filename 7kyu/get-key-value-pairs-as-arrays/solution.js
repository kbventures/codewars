function keysAndValues(data) {
    let key = []

    let value = [];
    for (var o in data) {
        value.push(data[o]);
    }


    Object.keys(data).forEach(e => {
        key.push(e)
    })

    return [key, value]
}

function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)];
}


function keysAndValues(data) {
    let key = []
    let value = Object.keys(data).map(val => data[val]);

    Object.keys(data).forEach(e => {
        key.push(e)
    })

    return [key, value]
}
