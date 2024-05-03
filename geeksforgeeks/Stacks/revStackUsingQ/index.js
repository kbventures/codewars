// https://www.geeksforgeeks.org/reverse-a-stack-using-queue/

// Given a stack, the task is to reverse the stack using the queue data structure.

// Examples:

//     Input: Stack: (Top to Bottom) [10 -> 20 -> 30 -> 40]
//     Output: Stack: (Top to Bottom) [40 -> 30 -> 20 -> 10]

//     Input:  Stack: [6 -> 5 -> 4]
//     Output: Stack: [4 -> 5 -> 6]

// Approach: The problem can be solved based on the following idea:

//     The stack follows LIFO order and the queue follows FIFO order. 
// So, if we push all stack elements into queue and then push it back into the stack it will be reversed.

// Illustration:

//     Consider Stack: [40 -> 30 -> 20 -> 10]     

//     Step 1:

//         Stack: (Bottom to Top) [40 -> 30 -> 20 -> 10]     
//         Queue: (Front to Rear) Empty

//     Step 2:

//         Stack: (Bottom to Top) [40 -> 30 -> 20]
//         Queue: (Front to Rear) 10

//     Step 3:

//         Stack: (Bottom to Top) [40 -> 30]             
//         Queue: (Front to Rear) [10 -> 20]

//     Step 4:

//         Stack: (Bottom to Top) [40]
//         Queue: (Front to Rear) [10 -> 20 -> 30]

//     Step 5:

//         Stack: (Bottom to Top) Empty
//         Queue: (Front to Rear) [10 -> 20 -> 30 -> 40]

//     Step 6:

//         Stack: (Bottom to Top) [10]
//         Queue: (Front to Rear) [20 -> 30 -> 40]

//     Step 7:

//         Stack: (Bottom to Top) [10 -> 20]
//         Queue: (Front to Rear) [30 -> 40]

//     Step 8:

//         Stack: (Bottom to Top) [10 -> 20 -> 30]
//         Queue: (Front to Rear) [40]

//     Step 9:

//         Stack: (Bottom to Top) [10 -> 20 -> 30 -> 40]
//         Queue: (Front to Rear) Empty

// Follow the steps to solve the problem:

//     Pop Elements one by one from the stack.
//     Enqueue every popped element into the queue.
//     Do it till the stack is empty.
//     Then, Dequeue elements one by one from the queue.
//     Push every dequeued element into the stack.
//     Do it till the queue is empty.
//     The stack is now reversed.

// Below is the implementation for the above approach:

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack{
    constructor(){
        this.top = null;
        this.size =0;
    }

    push(stuff){
        let newNode = new Node(stuff);
        newNode.next = this.top; 
        this.top = newNode;
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return undefined; 
        } else {
            let removedData = this.top.data;
            this.top = this.top.next;
            this.size--
            return removedData; 
        }
    }

    peek(){
        return this.isEmpty() ? undefined: this.top.data; 
    }

    length(){
        return this.isEmpty() ? undefined : this.size;
    }
    isEmpty(){
        return this.size ===0; 
    }
}

class LinkedListQueue{
    constructor(){
        this.front = null; 
        this.rear = null; 
        this.size = 0; 
    }

    enQueue(stuff){
        let newNode = new Node(stuff); 
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode; 
            this.rear = newNode;
        }
        this.size++
    }
    deQueue(){
        if(this.isEmpty()) return undefined; 
        let tempData = this.front.data; 
        if(this.size == 1){
            this.front = null; 
            this.rear = null; 
        } else {
            this.front = this.front.next
        }
        this.size--
        return tempData; 
    }

    isEmpty(){
        return this.size === 0; 
    }

    front(){
        return this.isEmpty() ? undefined : this.front.data; 
    }

    rear(){
        return this.isEmpty() ? undefined : this.rear.data; 
    }

    length(){
        return this.isEmpty() ? undefined : this.size;
    }
}


function revStackUsingQueue(arr){
    let result =[]
    let newStack = new LinkedListStack()
    let newQueue = new LinkedListQueue()
    for(let i=0;i<=arr.length -1;i++){
        console.log(arr[i])
        let temp = arr[i]
        newStack.push(temp)
    }

    while(!newStack.isEmpty()){
        let tempStackValue = newStack.pop()
        newQueue.enQueue(tempStackValue)
    }

    while(!newQueue.isEmpty()){
        let tempQueueValue = newQueue.deQueue()
        newStack.push(tempQueueValue)
    }
//     Pop Elements one by one from the stack.
//     Enqueue every popped element into the queue.
//     Do it till the stack is empty.
//     Then, Dequeue elements one by one from the queue.
//     Push every dequeued element into the stack.
//     Do it till the queue is empty.
//     The stack is now reversed.
    return newStack
}

const result0 = revStackUsingQueue([40,30,20,10])

console.log("Final Result", result0);