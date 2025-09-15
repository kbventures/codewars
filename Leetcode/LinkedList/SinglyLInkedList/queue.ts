namespace QueueLinkestList {
    class Node {
        val: number;
        next: Node | null;
        constructor(val:number, next = null){
            this.val = val; 
            this.next = next;
        }
    }

    class SinglyLinketListQueue{
        head: Node | null;
        tail: Node | null;
        size: number;

        constructor(){
            this.head = null; 
            this.tail = null;
            this.size = 0; 
        }

        enqueue(val:number){
            let newNode = new Node(val)
            if(!this.head){ 
                this.head = newNode;
                this.tail = newNode; 
            } else {
                this.head.next = newNode; 
                this.head = newNode
            }
            this.size++
        }

        dequeue():number|null{
            let temp; 
            if(!this.tail){
                return null; 
            } else {
                temp = this.tail.val
                this.tail = this.tail.next; 
            }
            this.size--
            return temp; 

        }

        peek():Node|null{
            if(!this.tail){
                return null; 
            } else {
                return this.tail; 
            }

        }

        front():Node|null{
            if(!this.head){
                return null;
            } else {
                return this.head;
            }
        }

        isEmpty():boolean{
            if(!this.head){
                return true;
            } else {
                return false; 
            }
        }
    }
}
