function gimme(triplet) {
    const sorted = [...triplet].sort((a, b) => a - b)
    return triplet.indexOf(sorted[1])
}

// function gimme(a) {
//     return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
//   }

// Return an array

