// REFACTOR

// function comp1(a, b) {
//     const c = new Date()
//     const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
//     const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
//     const as = a.toDateString()
//     const bs = b.toDateString()
//     if (da * 2 <= db) {
//         return `If you thought ${a} was a long wait, wait until you see how long it is until ${b}.`
//     } else if (da < db) {
//         return `Don't worry, ${b} isn't too much farther away than ${a} in the scheme of things.`
//     } else if (da === db) {
//         return `They're the same number of days away!`
//     } else {
//         return `You know ${a} is closer, right?`
//     }
// }

// function comp2(a, b) {
//     const c = new Date()
//     const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
//     const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
//     const as = a.toDateString()
//     const bs = b.toDateString()
//     if (da < db) {
//         const x = Math.floor(db / da)
//         return `Looks like ${b} is ${x} times farther away than ${a}.`
//     } else if (da === db) {
//         return `Same exact date there, mate.`
//     } else {
//         const x = Math.floor(da / db)
//         return `Looks like ${a} is ${x} times farther away than ${b}.`
//     }
// }

// function tot(a, b) {
//     const c = new Date()
//     const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
//     const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
//     const as = a.toDateString()
//     const bs = b.toDateString()
//     const x = db - da
//     return `You have ${da} days left until ${a}, and ${db} days left until ${b}.`
// }

// // feel free to plug these example dates into your functions
// const dateA = new Date(2022, 09, 26)
// const dateB = new Date(2022, 11, 25)


// SOLUTION

function daysToArrive(pack1, pack2) {
    const currentDate = new Date()
    const pack1daysArr = Math.ceil(Math.abs(currentDate.getTime() - pack1.getTime()) / (1000 * 60 * 60 * 24))
    const pack2daysArr = Math.ceil(Math.abs(currentDate.getTime() - pack2.getTime()) / (1000 * 60 * 60 * 24))
    const pack1ArrDate = pack1.toDateString()
    const pack2ArrDate = pack2.toDateString()
    if (pack1daysArr * 2 <= pack2daysArr) {
        return `If you thought ${pack1} was a long wait, wait until you see how long it is until ${pack2}.`
    } else if (pack1daysArr < pack2daysArr) {
        return `Don't worry, ${pack2} isn't too much farther away than ${pack1} in the scheme of things.`
    } else if (pack1daysArr === pack2daysArr) {
        return `They're the same number of days away!`
    } else {
        return `You know ${pack1} is closer, right?`
    }
}

function furthestMutipleCalc(pack1, pack2) {
    const currentDate = new Date()
    const pack1daysArr = Math.ceil(Math.abs(currentDate.getTime() - pack1.getTime()) / (1000 * 60 * 60 * 24))
    const pack2daysArr = Math.ceil(Math.abs(currentDate.getTime() - pack2.getTime()) / (1000 * 60 * 60 * 24))
    const pack1ArrDate = pack1.toDateString()
    const pack2ArrDate = pack2.toDateString()
    if (pack1daysArr < pack2daysArr) {
        const multiplesPack2 = Math.floor(pack2daysArr) / pack1daysArr
        return `Looks like ${pack2} is ${multiplesPack2} times farther away than ${pack1}.`
    } else if (pack1daysArr === pack2daysArr) {
        return `Same exact date there, mate.`
    } else {
        const multiplesPack1 = Math.floor(pack1daysArr / pack2daysArr)
        return `Looks like ${pack1} is ${multiplesPack1} times farther away than ${pack2}.`
    }
}

function daysToArrive(pack1, pack2) {
    const currentDate = new Date()
    const pack1daysArr = Math.ceil(Math.abs(currentDate.getTime() - pack1.getTime()) / (1000 * 60 * 60 * 24))
    const pack2daysArr = Math.ceil(Math.abs(currentDate.getTime() - pack2.getTime()) / (1000 * 60 * 60 * 24))
    const pack1ArrDate = pack1.toDateString()
    const pack2ArrDate = pack2.toDateString()
    const x = pack1daysArr - pack2daysArr
    return `You have ${pack1daysArr} days left until ${pack1}, and ${pack2daysArr} days left until ${pack2}.`
}





function packageInformation(pack1, pack2) {
    const currentDate = new Date()
    const pack1daysArr = Math.ceil(Math.abs(currentDate.getTime() - pack1.getTime()) / (1000 * 60 * 60 * 24))
    const pack2daysArr = Math.ceil(Math.abs(currentDate.getTime() - pack2.getTime()) / (1000 * 60 * 60 * 24))
    const pack1ArrDate = pack1.toDateString()
    const pack2ArrDate = pack2.toDateString()

    let sarcasm = "";
    let multiplesInfo = ""
    let daysLeftToArrInfo = ""

    if (pack1daysArr * 2 <= pack2daysArr) {
        sarcasm = `If you thought ${pack1} was a long wait, wait until you see how long it is until ${pack2}.`
    } else if (pack1daysArr < pack2daysArr) {
        sarcasm = `Don't worry, ${pack2} isn't too much farther away than ${pack1} in the scheme of things.`
    } else if (pack1daysArr === pack2daysArr) {
        sarcasm = `They're the same number of days away!`
    } else {
        sarcasm = `You know ${pack1} is closer, right?`
    }



    if (pack1daysArr < pack2daysArr) {
        const multiplesPack2 = Math.floor(pack2daysArr) / pack1daysArr
        multiplesInfo = `Looks like ${pack2} is ${multiplesPack2} times farther away than ${pack1}.`
    } else if (pack1daysArr === pack2daysArr) {
        multiplesInfo = `Same exact date there, mate.`
    } else {
        const multiplesPack1 = Math.floor(pack1daysArr / pack2daysArr)
        multiplesInfo = `Looks like ${pack1} is ${multiplesPack1} times farther away than ${pack2}.`
    }


    const x = pack1daysArr - pack2daysArr
    daysLeftToArrInfo = `You have ${pack1daysArr} days left until ${pack1ArrDate}, and ${pack2daysArr} days left until ${pack2ArrDate}.`

    return daysLeftToArrInfo + " " + multiplesInfo + " " + sarcasm
}

// feel free to plug these example dates into your functions


const package1 = new Date(2022, 09, 26)
const package2 = new Date(2022, 11, 25)

// daysToArrive(package1, package2)
// console.log(daysToArrive(package1, package2))
console.log(packageInformation(package1, package2))



