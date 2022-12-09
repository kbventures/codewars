function Bee(capacity, hive) {
    this.capacity = capacity;
    this.hive = hive;
}

function Hive() {
    this.pollen = 100;
}

//TODO: The amount of honey in the hive is not increasing.
Hive.prototype.addPollen = function (pollen) {
    this.pollen += pollen;
}

Hive.prototype.getPollen = function () {
    return this.pollen;
}

Bee.prototype.unloadPollen = function () {
    this.hive.addPollen(this.capacity);
}



class Bee {
    constructor(capacity, hive) {
        Object.assign(this, { capacity, hive });
    }

    unloadPollen() {
        this.hive.addPollen(this.capacity);
    }
}

class Hive {
    constructor() {
        this.pollen = 100;
    }

    addPollen(pollen) {
        this.pollen += pollen;
    }

    getPollen() {
        return this.pollen;
    }
}
