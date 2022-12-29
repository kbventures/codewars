function scheme(cmd) {
    const formatted = cmd.replace(')', '').replace('(', '');
    const [operation, ...rest] = formatted.split(' ');

    switch (operation) {
        case '+': {
            return rest.reduce((acc, el) => acc = acc + Number(el), 0);
        }
        case '*': {
            return rest.reduce((acc, el) => acc = acc * Number(el), 1);
        }
        case '/': {
            return rest.reduce((acc, el, index) => acc = Number(index === 0 ? el : acc / el), 1);
        }
        default: {
            return rest.reduce((acc, el, index) => acc = Number(index === 0 ? el : acc - el), 0);
        }
    }
}


