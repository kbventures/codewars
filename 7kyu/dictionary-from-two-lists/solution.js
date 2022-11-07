function createDict(keys, values) {
    // ...
    let result = {}

    for (key in keys) {
        if (!result[keys[key]]) {
            if (typeof values[key] === 'undefined') {
                result[keys[key]] = null;

            } else {
                result[keys[key]] = values[key]
            }
        }
    }

    return result;
}