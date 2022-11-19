function switcher(x) {
    return x.map(a => {
        if (a == 27) return "!";
        if (a == 28) return "?";
        if (a == 29) return " ";
        return String.fromCharCode(97 + 26 - parseInt(a));

    }).join('');
}