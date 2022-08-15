function duplicateSandwich(param) {
    let result;
    for (let i = 0; i < param.length; i++) {
        for (let j = i + 1; j < param.length; j++) {
            if (param[i] === param[j]) {
                return (result = param.slice(i + 1, j));
            }
        }
    }
}