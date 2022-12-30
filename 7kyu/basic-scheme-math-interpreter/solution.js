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


Date.prototype.getDate = function getGrinchDate() {
    let [day, month, date] = this.toString().split(" ");
    return month == 'Dec' && date == 25 ? 26 : +date;
};