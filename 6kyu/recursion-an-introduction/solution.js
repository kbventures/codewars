function stepDown(stair, width) {
    if (width === 0) return []
    let result = [];
    function rec(s, w) {
        if (s - w < 0) {
            return result.unshift(s);
        }
        result.unshift(s)
        return rec(s - w, w)
    }
    rec(stair, width)
    return result;
}

