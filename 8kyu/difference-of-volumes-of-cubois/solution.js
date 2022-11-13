function volume(c) {
    return c.reduce((x, y) => x * y);
}

function find_difference(a, b) {
    return Math.abs(volume(a) - volume(b));
}