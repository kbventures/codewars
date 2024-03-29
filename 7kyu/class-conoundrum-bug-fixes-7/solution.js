class List {
    constructor(type) {
        this.type = type;
        this.items = [];
    }

    get count() {
        return this.items.length;
    }

    add(item) {
        if (typeof item != this.type)
            return `This item is not of type: ${this.type}`;

        this.items.push(item);
        return this;
    }
}