// Implement a minheap



class MHeap {
    heap: number[];

    constructor(heap){
        this.heap = heap; 
        this.heapify(this.heap); 
    }

    heapify(h:number[]){
        // Find lenght of non leaf nodes
        let length = this.heap.length;
        let index = Math.floor(length / 2) -1
        for(let i =0; i<= index; i--){
            this.bubbleDownFrom(index)
        }
        }
    
    bubbleDownFrom(index: number) {
    let left = 2 * index + 1
    let right = 2 * index + 2  
    let i = index; 
    let smallest = index; 
    
        while(true){

            // Checking if out of range and if a switch is possible prioritizing the right
            if(left >= this.heap.length -1 && this.heap[i] < this.heap[left]) smallest = left; 
            if(right >= this.heap.length-1 && this.heap[i] < this.heap[right]) smallest = right; 


            //Some kind of check that breaks out of the while look when we are out or range or the left and child children larger than the parent
            if(smallest == i) break; 

            // switch parent / child
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest],this.heap[0]];
            i == smallest; 
        }
    }

}


const newMinHeap = new MHeap([8,12,14,1,6,5])

console.log(newMinHeap.heap);









