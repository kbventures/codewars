function greetDevelopers(list) {
    // thank you for checking out my kata :)
    return list.map(e => {
        e.greeting = `Hi ${e.firstName}, what do you like the most about ${e.language}?`
        return e
    })
}