function shortcut(string) {
    return string.split(/[aeiou]/g).join('')
}

const shortcut = (string) => string.replace(/[aeiou]/g, '');