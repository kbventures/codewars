function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Math.sqrt(sq) % 1 !== 0) return -1;
    let counter = sq + 1;

    while (Math.sqrt(counter) % 1 !== 0) {
        counter++
    }
    return counter;
}

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}