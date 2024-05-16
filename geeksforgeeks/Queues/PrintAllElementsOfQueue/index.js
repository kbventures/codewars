class Node{
    constructor(data){
        this.data = data; 
        this.next = null; 
    }
}

class LinkedQueue{
    constructor(){
        this.front = null;
        this.rear = null; 
        this.size = 0; 
    }

    enQueue(stf){
        let newNode = new Node(stf)
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode; 
        }else {
            this.rear.next = newNode;
            this.rear = newNode
        }
        this.size++
    }
    deQueue(){
        let tempData = this.front.data; 
        if(this.size === 1){
            this.front = null;
            this.rear = null; 
        } else if (this.isEmpty()){
            return undefined; 
        } else {
            this.front = this.front.next; 
        }

        this.size--
        return tempData; 
    }

    peek(){
        return this.isEmpty() ? undefined : this.front.data; 
    }

    isEmpty(){
        return this.size ===0; 
    }

    length(){
        return this.isEmpty() ? undefined : this.size;
    }

    printQueue(){

    }
}


let newQueue = new LinkedQueue()

newQueue.enQueue("1")
newQueue.enQueue("2")
newQueue.enQueue("3")
newQueue.enQueue("4")
newQueue.enQueue("5")
newQueue.enQueue("6")
newQueue.enQueue("7")
newQueue.enQueue("8")

let result = newQueue.printQueue()

console.log("Print result in one line", result)