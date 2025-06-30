function heapify(arr) {
  const n = arr.length;

  function siftDown(i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) smallest = left;
    if (right < n && arr[right] < arr[smallest]) smallest = right;

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      siftDown(smallest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    siftDown(i);
  }
}


const arr = [5, 3, 8, 4, 1, 2];
heapify(arr);
console.log(arr); // [1, 3, 2, 4, 5, 8]
