function replicate(times, number, result = []) {
    if (times <= 0) return result;
    return replicate(times - 1, number, [...result, number])
}