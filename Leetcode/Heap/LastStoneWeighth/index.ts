// // Brute force
// // Time complexity: O(n² log n) due to sorting inside the loop that runs up to n times;
// // Space complexity: O(n) for storing the stones array and intermediate results.
// function lastStoneWeight(stones: number[]): number {
// stones.sort((a,b)=> {
//         return a - b
//     })
//     while(stones.length >= 2){
//         if(stones.length == 1){
//             return stones[0]
//         } else if(stones.length == 0) {
//             return 0; 
//         }

//         // x <= y
//         let x = stones[stones.length - 2]
//         let y = stones[stones.length - 1]

//         if(x==y){
//             stones.splice(stones.length-2,2)
//         } else {
//             stones.splice(stones.length-2,2)
 
//             let temp = y - x;

//             stones.push(temp);

//             stones.sort((a,b)=>{
//                 return a-b;
//             })
//         }
//     }
//     return stones[0] ? stones[0] : 0; 
// };

// Max Heap Version

// Space complexity: O(k)
// Time complexity: O(log k)

function lastStoneWeight(stones: number[]): number {

    while(stones.length >= 2){
        if(stones.length == 1){
            return stones[0]
        } else if(stones.length == 0) {
            return 0; 
        }

        // x <= y
        let x = stones[stones.length - 2]
        let y = stones[stones.length - 1]

        if(x==y){
            stones.splice(stones.length-2,2)
        } else {
            stones.splice(stones.length-2,2)
 
            let temp = y - x;

            stones.push(temp);

            stones.sort((a,b)=>{
                return a-b;
            })
        }
    }
    return stones[0] ? stones[0] : 0; 


class MaxHeap{
    heap: number[]

    constructor(heap: number[]) {
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

                if (left > length && this.heap[left] > this.heap[smallest]) smallest = left;
                if (right > length && this.heap[right] > this.heap[smallest]) smallest = right;

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
    
    const newMaxHeap = new MaxHeap(stones)
}
