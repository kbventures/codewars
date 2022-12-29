function canEscape(walls) {
    // TODO: your code ..
    let position = 0;
    for (let key of walls) {
        position++
        if (Math.min(...key) <= position) return false
    }
    return true;
}