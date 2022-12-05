function validateHello(greetings) {
    let res = /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
    return res
}