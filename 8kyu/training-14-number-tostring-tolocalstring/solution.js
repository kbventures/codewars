function colorOf(r, g, b) {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(n) {
    var result = n.toString(16);
    return result.length == 1 ? "0" + result : result;
}