function isSortedAndHow(array) {
    let original = array.slice(0);
    array.sort((a, b) => a - b)
    if (original[0] === array[0]) return "yes, ascending"
    array.sort((a, b) => b - a)
    if (original[0] === array[0]) return "yes, descending"
    return "no"

}