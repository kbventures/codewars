function smallEnough(a, limit) {
    let result = true;
    a.forEach(e => {
        if (e > limit) {
            result = false
        }
    })
    return result;

}