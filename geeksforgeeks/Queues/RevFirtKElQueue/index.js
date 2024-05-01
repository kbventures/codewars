// https://www.geeksforgeeks.org/reversing-first-k-elements-queue/

// Given an integer k and a queue of integers, The task is to reverse the order of the first k elements of the queue, leaving the other elements in the same relative order.

// Only following standard operations are allowed on queue. 

//     enqueue(x) : Add an item x to rear of queue
//     dequeue() : Remove an item from front of queue
//     size() : Returns number of elements in queue.
//     front() : Finds front item.

// Approach:

// We can use recursive call stack and we can add remaining items of front without using additional queue.

// Below are the steps:

// 1. Reverse first k elements.

// 2. Remove from front and add to back (N – K) elements.

// Below is the implementation of above approach:



class Node{
    constructor(data){
        this.data = data; 
        this.next = null; 
    }
}

class LinkedListQueue{
constructor(){
    this.front = null; 
    this.rear = null; 
    this.size =0; 
}

//     enqueue(x) : Add an item x to rear of queue
        enqeue(x){
            let newNode = new Node(x)
            if(this.isEmpty()){
                this.front = newNode;
                this.rear = newNode; 
            } else {
                this.rear.next = newNode; 
            }
                this.rear = newNode; 
            this.size++
        }
//     dequeue() : Remove an item from front of queue
        dequeue(){
            if (this.isEmpty()) {
                return undefined; // Queue is empty, nothing to dequeue
            }
    
            let removedData = this.front.data; // Save the data to be removed
            if (this.size === 1) {
                this.front = null;
                this.rear = null;
            } else {
                this.front = this.front.next;
            }
            this.size--;
            return removedData; // Return the removed data
        }
//     size() : Returns number of elements in queue.
        size(){
            return this.isEmpty ? undefined : this.size; 
        }
        isEmpty(){
            return this.size ===0; 
        }
//     front() : Finds front item.

        front(){
            return this.isEmpty ? undefined : this.front.data; 
        }
        visualize(){
            let current = this.front; 
            let queueStr = "Front: "
            while(current){
                queueStr 
            }
        }

}


let newQueue = new LinkedListQueue()

newQueue.enQueue(10);
newQueue.enQueue(20);
newQueue.enQueue(30);
newQueue.enQueue(40);
newQueue.enQueue(50);
newQueue.enQueue(60);
newQueue.enQueue(70);
newQueue.enQueue(80);
newQueue.enQueue(90);


function revFirstKElQueue(q, k){

    if(k ===0)return queue; 
    let rem = q.dequeue()
    q.enQueue(rem)

}


const result0 = revFirstKElQueue(queue,3)