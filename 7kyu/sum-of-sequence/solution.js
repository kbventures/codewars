const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let result = 0;
    for (let i = begin; i <= end; i = i + step) {
        result = result + i
    }
    return result;
};