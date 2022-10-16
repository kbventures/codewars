
//Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. 
//Now imagine it arranged as a grid.

// for the less imaginative among us :) 
// [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

// as a grid
// [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
// ]

// Please write twin functions that each take in a given value that will only appear once within a given array
// of a similar structure to the one described above, which will either move that value up one row or down one row in the array,
// keeping its same horizontal position.It will essentially swap places with whatever was where it needed to be.
// Just like in Day 2, don't do anything if the given value is already as high or low as it can get.
//Oh, and go ahead and mutate the given array.We're livin' on the wild side!


// as a grid
// [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
// ]

let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

function moveUp(grid, key) {
    let yAxis = grid.map((e) => e.some((a) => a === key)).indexOf(true);
    console.log(yAxis)
    let xAxis = grid[yAxis].indexOf(key);
    console.log(xAxis)
    if (yAxis - 1 < 0) return grid;
    const temp = grid[yAxis - 1][xAxis];
    grid = grid.map((elementY, indexY) => {
        if (indexY === yAxis - 1) {
            return elementY.map((a, b) => (b === xAxis ? key : a))
        } else if (indexY === yAxis) {
            return elementY.map((a, b) => (b === xAxis ? temp : a))
        }
        return elementY
    });
    return grid;
}

function moveDown(grid, key) {
    let yAxis = grid.map((x) => x.some((a) => a === key)).indexOf(true);
    let xAxis = grid[yAxis].indexOf(key);
    if (yAxis + 1 >= grid.length) return grid;
    const temp = grid[yAxis + 1][xAxis];
    grid = grid.map((elementY, indexY) => {
        if (indexY === yAxis + 1) {
            return elementY.map((a, b) => (b === xAxis ? key : a))
        } else if (indexY === yAxis) {
            return elementY.map((a, b) => (b === xAxis ? temp : a))
        }
        return elementY
    });

    return grid;
}

// let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]


// call move up function with 'h' and myGrid
console.log(moveUp(myGrid, "h"))
console.log(moveDown(myGrid, "h"))
console.log(moveDown(myGrid, "e"))

//console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]