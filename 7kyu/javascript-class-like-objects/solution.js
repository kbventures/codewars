Animal = function (name, type) {
    this.name = name;
    this.type = type;
    this.toString = function () { return this.name + " is a " + this.type };
};

var Animal = function (name, type) {
    this.name = name;
    this.type = type;
}
Animal.prototype.toString = function () {
    return this.name + ' is a ' + this.type;
}

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    toString() {
        return `${this.name} is a ${this.type}`;
    }
}