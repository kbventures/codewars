// Brute force
// Space complexity: O(n) because the array grows as you add elements.
// Time complexity: O(k * n log n) since you sort the array on each of the k calls to add.

class KthLargest {
    k:number;
    heap: number[]

    constructor(k: number, heap: number[]) {
        this.k = k;
        this.heap = heap;
        this.heapify(this.heap);
    }

        
        heapify(arr: number[]) {
        this.heap = arr.slice(); // copy input array
        // Iterates through number non-leaf nodes which are nodes that have at least one child.
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.bubbleDownFrom(i);
        }
        }

        bubbleDownFrom(index: number) {
            const length = this.heap.length;
            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let smallest = index;

                if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
                if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

                if (smallest === index) break;
                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                index = smallest;
            }
        }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


class MinHeap {

    heap: number[] = [];
    // We utilize an array because we can mathematically traverse child and parent nodes using index
    // Parent of node at index i is at Math.floor((i - 1) / 2)
    // Left child is at 2 * i + 1
    // Right child is at 2 * i + 2

    insert(val: number) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    extractMin(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        this.bubbleDownFrom(0);
    }

    bubbleDownFrom(index: number) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    peek(): number | undefined {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }

    heapify(arr: number[]) {
        this.heap = arr.slice(); // copy input array
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.bubbleDownFrom(i);
        }
    }
}

// Example usage
const initialArr = [7,3,8,1,4,5]

const result = new KthLargest(3,initialArr);
console.log('result',result); 


// Space complexity: O(k)
// Time complexity: O(log k)

class KthLargest {
    k:number
    heap: number[]

    constructor(k: number, heap: number[]) {
        this.k = k;
        this.heap = heap;
        this.heapify(this.heap);
    }

        // Floyd's Method to make heap out of balanced tree
        heapify(arr: number[]) {
        this.heap = arr.slice(); 
        // Iterates through number non-leaf nodes which are nodes that have at least one child.
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.bubbleDownFrom(i);
        }
        }

        bubbleDownFrom(index: number) {
            const length = this.heap.length;
            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let smallest = index;

                if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
                if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

                if (smallest === index) break;
                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                index = smallest;
            }
        }

        add(val: number) {
            this.heap.push(val);
            this.bubbleUp();
            while(this.heap.length > this.k){
                this.deleteRoot();
            }
            return this.heap[0]
        }

        bubbleUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                let parent = Math.floor((index - 1) / 2);
                if (this.heap[parent] <= this.heap[index]) break;
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            }
        }

        deleteRoot() {
            if (this.heap.length === 0) return null;

                const last = this.heap.pop();

            if (this.heap.length > 0 && last !== undefined) {
                this.heap[0] = last;
                this.bubbleDownFrom(0);
            }

        }

}