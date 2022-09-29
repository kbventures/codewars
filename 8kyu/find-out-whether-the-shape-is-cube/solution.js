var cubeChecker = function (volume, side) {
    if (side < 1 || volume < 1) return false;
    if ((side * side * side) === volume) return true;
    return false;
};

var cubeChecker = function (v, s) {
    return s > 0 && v == s * s * s;
};