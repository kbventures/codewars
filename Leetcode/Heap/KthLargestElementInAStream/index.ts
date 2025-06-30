// Space complexity: O(n) because the array grows as you add elements.

// Time complexity: O(k * n log n) since you sort the array on each of the k calls to add.

class KthLargest {
    k:number;
    nums: number[]

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums;
    }

    add(val: number): number {
        this.nums.push(val)
        this.nums.sort((a,b)=>{
            return Number(a) - Number(b)
        })
        return this.nums[this.nums.length - this.k]
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


type ComparatorFunction = (a: number, b: number) => number;

let kthLargestSize: number;
let minHeap: MinHeap;

interface MinHeap {
    data: number[];
    comparator: ComparatorFunction;
    heapify: () => void;
    peek: () => number | null;
    offer: (value: number) => void;
    poll: () => number | null;
    bubbleUp: (index: number) => void;
    bubbleDown: (index: number) => void;
    swap: (index1: number, index2: number) => void;
    size: () => number;
}

// Initializing the Kth largest element finder
function KthLargestInit(k: number, nums: number[]): void {
    kthLargestSize = k;
    minHeap = createMinHeap();
    nums.forEach(num => {
        kthLargestAdd(num);
    });
}

// Function to add a new value to the data collection
function kthLargestAdd(val: number): number {
    minHeap.offer(val);
    if (minHeap.size() > kthLargestSize) {
        minHeap.poll();
    }
    return minHeap.peek()!;
}

// Create a MinHeap with default values and a comparator
function createMinHeap(): MinHeap {
    const heap: MinHeap = {
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
        // Adds a new value and bubbles it up to maintain heap property
        offer(value) {
            this.data.push(value);
            this.bubbleUp(this.size() - 1);
        },
        // Removes and returns the root value of the heap
        poll() {
            if (this.size() === 0) {
                return null;
            }
            const result = this.data[0];
            const last = this.data.pop();
            if (this.size() !== 0) {
                this.data[0] = last!;
                this.bubbleDown(0);
            }
            return result;
        },
        // Bubbles a value up the heap until the heap property is restored
        bubbleUp(index) {
            while (index > 0) {
                const parentIndex = (index - 1) >> 1;
                if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                    this.swap(index, parentIndex);
                    index = parentIndex;
                } else {
                    break;
                }
            }
        },
        // Bubbles a value down the heap until the heap property is restored
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
        // Swaps two values in the heap
        swap(index1, index2) {
            [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
        },
        // Returns the number of elements in the heap
        size() {
            return this.data.length;
        }
    };

    heap.heapify();
    return heap;
}

// Example of usage
KthLargestInit(3, [4, 5, 8, 2]);
console.log(kthLargestAdd(3)); // Should return the kth largest element after adding 3
console.log(kthLargestAdd(5)); // Should return the kth largest element after adding 5
console.log(kthLargestAdd(10)); // Should return the kth largest element after adding 10
console.log(kthLargestAdd(9)); // Should return the kth largest element after adding 9
console.log(kthLargestAdd(4)); // Should return the kth largest element after adding 4