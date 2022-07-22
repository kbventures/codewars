function componentToHex(c) {
    var hex = c.toString(16);
    console.log(hex)
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(componentToHex(10, 51, 255)); // #0033ff




console.log(null === null)