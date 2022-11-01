// Brute Force

function gridIndex(grid, indices) {
    let result = ""
    indices.forEach(elem => {
        let current = 1;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {

                if (elem == current) {
                    result += grid[i][j]
                }
                current++
            }
        }
    })
    return result;
}


// Codewars Solutions
const gridIndex = (grid, indices) => {
    const flattened = grid.flat();
    return indices.map(i => flattened[i - 1]).join('');
}

// Alternative solutions
const gridIndex = (grid, indices) =>
    indices.map(val => [].concat(...grid)[--val]).join(``);

function gridIndex(grid, indices) {
    const vector = grid.flat()
    return indices.reduce((acc, el) => acc + vector[el - 1], '')
}


