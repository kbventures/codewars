function warnTheSheep(queue) {
    console.log(queue.indexOf('wolf'))
    console.log(queue.length)
    if (queue[queue.length - 1] === 'wolf') return "Pls go away and stop eating my sheep"
    return `Oi! Sheep number ${queue.length - 1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
}