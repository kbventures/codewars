// Parameters n diviser integer, x and y are integers
// Return true if n is divisable by both x and y, else false
// Example : [3,1,3] returns true
// Pseudocode: return expression testing weatehr both n % x and y is equal 0
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0)
}