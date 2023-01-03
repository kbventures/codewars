function cyclops(n) {
    // your code here
    let binary = n.toString(2)
    if (binary.length < 3) return false;
    if (binary.length % 2 === 0) return false;
    let midIndex = Math.floor(binary.length / 2)
    return binary.slice(0, midIndex) === binary.slice(midIndex + 1)

}