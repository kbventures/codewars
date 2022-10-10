// For the string below and 4
let temp = "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"

function decodeStringSix(str, key) {
    return [...str].filter((x, y) => (y + 1) % key !== 0).join('');
}