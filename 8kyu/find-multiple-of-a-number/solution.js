function findMultiples(int, limit) {
    let result = []

    for (let i = int; i <= limit; i += int)
        result.push(i)

    return result
}