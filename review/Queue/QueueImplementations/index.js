// Queue LinkedList

class Node{
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class LinkedListQueue{
    constructor(){
    this.front = null;
    this.rear = null;
    this.size = 0; 
    } 

    enqueue(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode; 
            this.rear = newNode; 
        }

        this.size++
    }

    dequeue(){
        let temp; 
        if(this.isEmpty()){
            return undefined
        } else if(this.size ===1){
            temp = this.front.value
            this.front = null; 
            this.rear = null; 
        } else {
            temp = this.front.value; 
            this.front = this.front.next; 
        }
        return temp; 
    }

    isEmpty(){
        return this.size === 0;
    }

    length(){
        return this.size;
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        } else {
            return this.front.value
        }
    }
}