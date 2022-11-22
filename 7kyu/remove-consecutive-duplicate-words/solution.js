// double words out
const removeConsecutiveDuplicates = s => {
    const out = [];
    s = s.split(' ');
    for (let i = 1; i <= s.length; i++) {
        if (s[i] !== s[i - 1]) {
            out.push(s[i - 1])
        }
    }
    return out.join(' ')
}

function removeConsecutiveDuplicates(s) {

    return s.split(' ').filter((e, i, a) => { return e != a[i - 1] }).join(' ')
}


