// Implement singly linked list2

namespace LinkedListStackNameSpace {
export class Node{
    val: number;
    next: Node | null; 
    constructor(val:number){
        this.val = val;
        this.next = null; 
    }
}

export class SinglyLinketList{
    size: number;
    head: Node | null; 

    constructor(head:Node|null = null, size: number = 0){
        this.head = head;
        this.size = size;
    }

    add(val:number){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode; 
        }
        this.size++
    }

    delete():number|undefined{
        if(!this.head){
            return undefined;
        }{
            let temp = this.head.val; 
            this.head = this.head.next; 
            this.size--
            return temp;
        }
    }

    peek():number|undefined{
        if(!this.head){
            return undefined;
        } else {
            return this.head.val
        }
    }

    length():number{
        return this.size; 
    }
    search(val:number):boolean{
        let tempHead = this.head; 
        while(tempHead){
            if(tempHead.val == val){
                return true
            } 
            tempHead = tempHead.next;
        }
        return false;
    }
    
}

}

let newLinkedList = new LinkedListStackNameSpace.SinglyLinketList()
newLinkedList.add(0);
newLinkedList.add(1);
newLinkedList.add(2);
console.dir(newLinkedList,{depth:0});
newLinkedList.peek()
newLinkedList.search(1);



// Stack Operations (LIFO - Last In, First Out):

// push(item) - Add an item to the top of the stack
// pop() - Remove and return the top item from the stack
// peek()/top() - Return the top item without removing it
// isEmpty() - Check if the stack is empty
// size() - Return the number of elements in the stack

// Queue Operations (FIFO - First In, First Out):

// enqueue(item) - Add an item to the rear/back of the queue
// dequeue() - Remove and return the front item from the queue
// front()/peek() - Return the front item without removing it
// rear()/back() - Return the rear item without removing it (optional)
// isEmpty() - Check if the queue is empty
// size() - Return the number of elements in the queue