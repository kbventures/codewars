function hasOneChar(s) {
    return new Set(s.split('')).size === 1 ? true : false;
}