function stringy(size) {
    let toggle = true;
    let result = '';
    for (let i = 0; i < size; i++) {
        if (toggle) {
            result += 1
            toggle = false
            continue
        }
        else result += 0
        toggle = true;
    }
    return result;
}