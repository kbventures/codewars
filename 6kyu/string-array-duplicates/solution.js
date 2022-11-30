function dup(s) {
    return s.map(w => {
        return w.split('').filter((c, i, arr) => {
            return c !== arr[i - 1];
        }).join('');
    });
};