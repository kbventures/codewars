const x = Object.getPrototypeOf({}) // what's the protoype of the empty object?
console.log("what's the protoype of the empty object?", x)

const y = Object.getPrototypeOf(new Number(2)) // what's the protoype of a Number?
console.log("what's the protoype of a Number", y)


const ogObject = { name: "OG_AF", iAmCool: true };
const crazyObject = { "name": "Crazy" };

console.log("what's the protoype of the crazyObject object? before messing with it", Object.getPrototypeOf(crazyObject));

Object.setPrototypeOf(crazyObject, ogObject)

console.log("what's the protoype of the crazyObject object?", Object.getPrototypeOf(crazyObject));

const crazyCrazyObject = { name: "CrazyCrazy" }

Object.setPrototypeOf(crazyCrazyObject, crazyObject)

console.log("what's the protoype of the crazyCrazyObject object?", Object.getPrototypeOf(crazyCrazyObject));

console.log("iAmCool?", crazyCrazyObject.iAmCool);

findPropertyAndReturnItsValue("iAmCool", crazyCrazyObject)

// null <= {} <= new Number()

function findPropertyAndReturnItsValue(prop, obj) { // prop "iAmCool"
    const keys = Object.keys(obj) // obj === crazyCrazyObject { name: "sdfsdfs" }
    // keys: ["name", ]
    for (let i = 0; i < keys.length; i++) {
        const key = keys[0];
        if (key === prop) {
            return obj[key];
        }
    }
    const protoypeObj = Object.getPrototypeOf(obj) // crazyObject
    if (!protoypeObj) {
        return undefined;
    }
    return findPropertyAndReturnItsValue(prop, protoypeObj)
}

findPropertyAndReturnItsValue("xyz", crazyCrazyObject)