// Ipmlement Linked List Queue
// Filo


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
        this.size = 0; 
    }
    enQueue(stf){
        let newNode = new Node(stf)
        if(this.isEmpty()){
            this.front = newNode; 
        } else {
            this.rear.next = newNode;
        }

        this.rear = newNode; 

        this.size++; 
    }
    deQueue(){
 
    }

    peek(){
        return this.isEmpty() ? undefined : this.top.data; 
    }

    isEmpty(){
        return this.size === 0; 
    }
    length(){
        return this.isEmpty() ? undefined : this.size
    }
}






















































