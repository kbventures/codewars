const peopleWithAgeDrink = (age) => {
    switch (true) {
        case (age >= 21): return 'drink whisky'
        case (age >= 18): return 'drink beer'
        case (age >= 14): return 'drink coke'
        default: return 'drink toddy'
    }
};