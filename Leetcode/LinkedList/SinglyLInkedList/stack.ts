// Implement singly linked list



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
            this.head = this.head.next; 
        }
        this.size--
    }

    peek():number|undefined{
        if(!this.head){
            return undefined;
        } else {
            return this.head.val
        }
    }

    length():number|undefined{
        if(!this.head){
            return undefined
        } else {
            return this.size
        }
    }
    search(val:number):boolean|undefined{
        let tempHead = this.head; 
        while(tempHead){
            if(tempHead.val == val){
                return true
            } 
            tempHead = tempHead.next;
        }
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