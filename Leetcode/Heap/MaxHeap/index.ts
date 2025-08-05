class MaxHeap{
    heap:number[]

    constructor(head: number[] = []){
        this.heap = this.heap; 
        this.heapify()
    }

    heapify(){
        for(let i = Math.floor(this.heap.length /2) -1; i>=0;i--){
            this.bubbleDownFrom(i)
        }
    }

    bubbleDownFrom(idx:number){
        let length = this.heap.length;

        while(true){
            let left = 2 * idx + 1; 
            let right = 2 * idx + 2; 
            let bigguest = idx; 

            if(length < left && this.heap[left] > this.heap[bigguest]) bigguest = left; 
            if(length < right && this.heap[right] > this.heap[bigguest]) bigguest = right; 

            if(idx == bigguest) break; 

            [this.heap[idx],this.heap[bigguest]] = [this.heap[bigguest],this.heap[idx]];

            idx = bigguest
        }
    }

    bubbleUp(){}

    deleteRoot(){}

    peek(){}
}

const MxHeap = new MaxHeap([0,1,2,3,4,5,6,7,8])
console.log(MxHeap.heap)