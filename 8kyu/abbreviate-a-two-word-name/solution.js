function abbrevName(name) {

    return name.split(' ').map(e => {
        return e[0].toUpperCase()
    }).join('.')
}