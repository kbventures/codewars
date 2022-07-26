class Node {
    constructor(value) {
        this.next = null
        this.value = value;
    }
    addNext(nextNode) {
        this.next = nextNode;
    }
}


class LinkedList { // { firstNode: { value: 1, next: { value: 23 } } }
    constructor() {
        this.firstNode = null; // { value: 1 }
    }

    // recursive function
    _findLastNode(node) { // { value: 1 } // { value: 1, next: ... }
        // base case
        if (!node.next) { // true // false
            return node // { value: 1 }
        }
        return this._findLastNode(node.next) // next is always an object of type Node
    }

    push(numberValue) { // numberValue: 1 // numberValue: 23 // numberValue: 7
        const newNode = new Node(numberValue) // { value: 1 } // { value: 23 } // { value: 7 }
        if (!this.firstNode) { // true // false // false
            this.firstNode = newNode;
            return;
        }
        const lastNode = this._findLastNode(this.firstNode); // { value: 1 } // { value: 1, next: ...}
        lastNode.next = newNode; // { value: 1, next: { value: 23 } }
    }

    getLast() {
        if (!this.firstNode) {
            /*
              const myFirstList = new LinkedList();
              const myFirstList.getLast() // return null
            */
            return null // we dont have anything yet
        }
        return this._findLastNode(this.firstNode)
    }
}




/*
 
SPEC
 
I want to use a linkedlist to store my favirote numbers
in no specifc order and be able to update them (delete, push more, etc)
 
Array = [1,23,7];
LinkedList => { value: 1 } => { value: 23 } => { value: 7 }
 
 
LinkedList { firstNode }
firstNode { value: 1, next: nextNode }
nextNode { value: 23, next: nextNextNode }
nextNextNode { value: 7, next: null }
*/

const l = new LinkedList();
l.push(1);
l.push(23);
l.push(7);

console.log(JSON.stringify(l));

l.getLast(); // should return 7
l.removeLast();
l.getLast(); // should return 23
l.count(); // 2



