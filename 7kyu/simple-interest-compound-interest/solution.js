function interest(P, r, n) {
    // your code here
    let tempP = P;
    let result = [0, 0];

    for (i = 0; i < n; i++) {

        result[0] += (P * r)
        tempP = tempP + (tempP * r)
    }
    result[0] += P;
    result[0] = Math.round(result[0])
    result[1] += Math.round(tempP);
    return result;
}


