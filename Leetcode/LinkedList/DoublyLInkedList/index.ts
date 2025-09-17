namespace DoublyLinkedListNamespace {
  export class Node {
    val: number;
    next: Node | null;
    prev: Node | null;

    constructor(val: number) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }

  export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
    size: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    // Add to the front
    addFront(val: number) {
      const node = new Node(val);
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.size++;
    }

    // Add to the end
    addEnd(val: number) {
      const node = new Node(val);
      if (!this.tail) {
        this.head = this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }

    // Remove from front
    removeFront(): number | undefined {
      if (!this.head) return undefined;
      const val = this.head.val;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      this.size--;
      return val;
    }

    // Remove from end
    removeEnd(): number | undefined {
      if (!this.tail) return undefined;
      const val = this.tail.val;
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      else this.head = null;
      this.size--;
      return val;
    }

    // Peek front
    peekFront(): number | undefined {
      return this.head?.val;
    }

    // Peek end
    peekEnd(): number | undefined {
      return this.tail?.val;
    }

    // Search O(n)
    search(val: number): boolean {
      let current = this.head;
      while (current) {
        if (current.val === val) return true;
        current = current.next;
      }
      return false;
    }

    length(): number {
      return this.size;
    }
  }
}

// Complexity Analysis:
// - Space: O(n) for n nodes.
// - Add/Remove Front/End: O(1) each.
// - Peek Front/End: O(1) each.
// - Search: O(n).


// Doubly linkedlist with operations needed for LRU Cache
// Stack singly linked list

namespace DoublyLinkedstList{
    export class Node {
        next: Node | null;
        prev: Node | null;
        value: number; 
        constructor(val:number, next = null, prev= null ){
            this.value = val; 
            this.next = next;
            this.prev = prev; 
        } 
    }

    export class DoublyLinkedstList{
        start: Node | null;
        end: Node | null; 
        size: number; 
        constructor(start = null, end = null, size = 0){
            this.start = start;
            this.end = end;
            this.size = size; 
        }

        enqueue(val:number){
            let newNode = new Node(val)
            if(!this.start){
                this.start = newNode;
                this.end = newNode; 
            } else {
                let temp = this.end; 
                this.end!.next = newNode;
                this.end = newNode; 
                this.end.prev = temp;
            }
            this.size++
        }    

        dequeue():Node | undefined{
            
            if(!this.start){
                return undefined
            } else if(!this.start.next) {
                let returnVal = this.start;
                this.start = null; 
                this.end = null; 
                this.size = 0;
                return returnVal
            } else {
                let returnVal = this.start
                this.start = this.start.next; 
                this.start.prev = null;
                this.size-- 
                return returnVal; 
            }
            
    }        

        peekStart(val:number){}

        peekEnd(){}

        // Move any node to the front
        MoveAnyNodeToFront(node:Node){
            const result = this.RemoveSpecificNode(node)
            if(!result) return

            let temp = this.end
            this.end!.next = node;
            this.end = node; 
            node.prev = temp; 

       }
        
        RemoveSpecificNode(node:Node|null):Node|undefined{
            if(!node) return undefined;

            // Doubly linkedlist is empty
            if(!this.start && !this.end){
                return undefined; 
            }
            // One node left
            if(this.start == node && this.end == node){
                this.start = null; 
                this.end = null; 
                this.size--
                return undefined; 
            }

            if(this.start == node){
                let temp = this.start.next;
                temp!.prev = null; 
                this.start = temp;
                this.size--
                return node; 
            }

            if(this.end == node){
                let temp = this.end.prev;
                this.end = temp;
                this.size--
                return node; 
            }
            
                let left = node.prev;
                let right = node.next;
                left!.next = right;
                right!.prev = left; 
                this.size--
                return node; 
        }

        searchNode(node:Node|null):boolean{
            let temp = this.start;

            while(temp){

                if(temp == node) return true
                temp = temp.next
            }

            return false; 
        }

        searchNodeValue(val:number):Node|undefined{
            let temp = this.start

            while(temp){
                // node found
                if(temp.value == val) return temp;
                temp = temp.next
            }
            // Not found
            return undefined; 
        }

    }

}

// For the LeetCode LRU Cache, you absolutely need methods that support:

// MoveAnyNodeToFront(node) → because when a key is accessed, its node must move to the head.

// RemoveSpecificNode(node) → because when capacity is exceeded, you need to evict the least recently used node (tail).

// Other helpers like searchByValue, searchNode, or peekStart/peekEnd are not strictly required if you manage nodes via a HashMap<Node>.