function findSenior(list) {
    // thank you for checking out the Coding Meetup kata :)

    const max = list.reduce(function (prev, current) {
        return (prev.age > current.age) ? prev : current
    })
    return list.filter(e => e.age === max.age)
}

function findSenior(list) {
    var maxAge = Math.max(...list.map(person => person.age));
    return list.filter(person => person.age === maxAge);
}