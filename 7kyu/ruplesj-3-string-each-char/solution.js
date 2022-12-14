String.prototype.eachChar = function (fn) {
    return [...this]
        .map((typeof fn === 'string') ? c => c + fn : fn)
        .join('');
};