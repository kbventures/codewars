let kthLargestSize;
let minHeap;

function KthLargestInit(k, nums) {
    kthLargestSize = k;
    minHeap = createMinHeap();
    nums.forEach(num => {
        kthLargestAdd(num);
    });
}

function kthLargestAdd(val) {
    minHeap.offer(val);
    if (minHeap.size() > kthLargestSize) {
        minHeap.poll();
    }
    return minHeap.peek();
}

function createMinHeap() {
    const heap = {
        data: [],
        comparator: (a, b) => a - b,
        heapify() {
            if (this.size() < 2) return;
            for (let i = 1; i < this.size(); i++) {
                this.bubbleUp(i);
            }
        },
        peek() {
            return this.size() === 0 ? null : this.data[0];
        },
        offer(value) {
            this.data.push(value);
            this.bubbleUp(this.size() - 1);
        },
        poll() {
            if (this.size() === 0) return null;
            const result = this.data[0];
            const last = this.data.pop();
            if (this.size() !== 0) {
                this.data[0] = last;
                this.bubbleDown(0);
            }
            return result;
        },
        bubbleUp(index) {
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                    this.swap(index, parentIndex);
                    index = parentIndex;
                } else {
                    break;
                }
            }
        },
        bubbleDown(index) {
            const lastIndex = this.size() - 1;
            while (true) {
                let findIndex = index;
                const leftIndex = index * 2 + 1;
                const rightIndex = index * 2 + 2;
                if (
                    leftIndex <= lastIndex &&
                    this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
                ) {
                    findIndex = leftIndex;
                }
                if (
                    rightIndex <= lastIndex &&
                    this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
                ) {
                    findIndex = rightIndex;
                }
                if (index !== findIndex) {
                    this.swap(index, findIndex);
                    index = findIndex;
                } else {
                    break;
                }
            }
        },
        swap(i1, i2) {
            const temp = this.data[i1];
            this.data[i1] = this.data[i2];
            this.data[i2] = temp;
        },
        size() {
            return this.data.length;
        },
    };

    heap.heapify();
    return heap;
}

// Usage example
KthLargestInit(3, [4, 5, 8, 2]);
console.log(kthLargestAdd(3));  // 4
console.log(kthLargestAdd(5));  // 5
console.log(kthLargestAdd(10)); // 5
console.log(kthLargestAdd(9));  // 8
console.log(kthLargestAdd(4));  // 8
