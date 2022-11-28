function nextItem(xs, item) {
    let array = xs[Symbol.iterator]()
    for (let element of array) {
        if (element == item) {
            return array.next().value
        }
    }
}