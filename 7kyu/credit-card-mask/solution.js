// return masked string
function maskify(cc) {
    return cc.length < 5 ? cc : cc.slice(-4).padStart(cc.length, '#');
}

// return masked string
function maskify(cc) {
    cc = cc.split("");
    for (var i = 0; i < cc.length - 4; i++) {
        cc[i] = "#";
    }

    cc = cc.join("");
    return cc
}