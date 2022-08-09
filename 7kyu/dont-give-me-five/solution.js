// Parameter
//
// Return: The amont of numbers between the start and end number which don't include 5
// Example (1,9) returns 8
// Pseudocode: Loop from the starting number to the end number and return the count of numberse that don't include 5


function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
        let check = false;
        i.toString().split('').forEach(e => {
            if (Number(e) === 5) { check = true }
        })
        if (check === true) continue
        count++
    }
    return count;
}