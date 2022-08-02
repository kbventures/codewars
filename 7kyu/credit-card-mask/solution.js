// return masked string
function maskify(cc) {
    return cc.length < 5 ? cc : cc.slice(-4).padStart(cc.length, '#');
}