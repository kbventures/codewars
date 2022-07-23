function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    return (classPoints.reduce((acc, e) => {
        return acc + e
    }, 0) / classPoints.length) < yourPoints
}