var health = 100
var position = 0
var coins = 0
function main() {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
}
const main = () =>
    [rollDice1, move, combat, getCoins, buyHealth, printStatus].forEach(action =>
        action()
    )