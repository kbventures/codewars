// space: O(k), time: O(log k).
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

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */