// Initial Solution
function averagePair(arr, num) {
    if (arr.length === 0) return false
    let pointerStart = 0;
    let pointerNext = arr.length;

    while (pointerStart < pointerNext) {
        let currentAvg = (arr[pointerStart] + arr[pointerNext]) / 2;

        if (currentAvg === num) {
            return true
        } else if (arr[pointerStart] === arr.length - 2 && arr[pointerNext] === arr.length - 1) {
            return false
        } else if (pointerNext !== arr.length) {
            pointerNext++
        } else {
            pointerStart++
            pointerNext = pointerStart + 1;
        }
    }
}



//averagePair Optimised Solution
function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}