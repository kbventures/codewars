const remove = s => s.replace(/!$/, '');

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}

function remove(s) {
    return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}