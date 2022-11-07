function encrypt(text, rule) {
    if (text == '') return ''
    return [...text].map(e => {
        if ((e.charCodeAt(e) + rule) > 255) { return String.fromCharCode((e.charCodeAt() + rule) % 256) }
        return String.fromCharCode(e.charCodeAt(0) + rule)
    }).join('')
};

