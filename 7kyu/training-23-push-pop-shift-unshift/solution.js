const infiniteLoop = (arr, d, n) => {
    for (let i = 1; i <= n; i++) {
        if (d === "left") {
            arr[2].push(arr[0].shift());
            arr[1].push(arr[2].shift());
            arr[0].push(arr[1].shift());
        }
        if (d === "right") {
            arr[0].unshift(arr[2].pop());
            arr[1].unshift(arr[0].pop());
            arr[2].unshift(arr[1].pop());
        }
    }
    return arr;
}