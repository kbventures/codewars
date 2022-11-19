// Implementating a list node 

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }

}

// Implementing a list node 

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }
}

// Putting it all together

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

// Create a linked list with node1

let list = new LinkedList(node1)

// Accessing the node

console.log(list.head.next.data)



/*
https://medium.com/@michael.dburke56/what-are-linked-lists-all-about-253e7c587c69

class LinkedList {
    constructor () {
        this.head = null;
    }
    showAllNodes() {
        let _current = this.head;
        while (_current) {
            console.log(data: ${_current.data});
            _current = _current.next;
        }
    }

}

class Node {
    constructor (_name, _data) {
        this.name = _name;
        this.data = _data;
        this.next = null;
        this.prev = null;
    }
}


const MyList = new LinkedList();

const FirstNode = new Node("first node", 1);
MyList.head = FirstNode;


const SecondNode = new Node("second node", 2);

FirstNode.next = SecondNode;
SecondNode.prev = FirstNode;

MyList.showAllNodes();
insertAt(insertNode, index) {
    let indexTracker = 0;
    let node = this.head;
    while (indexTracker !== index) {
      indexTracker++;
      node = node.next;
      if (indexTracker === index) {
        node.prev.next = insertNode;
        insertNode.prev = node.prev;
        insertNode.next = node;
        node.prev = insertNode;
        console.log(\n${insertNode.data} has been inserted at index ${index});
      }
    }
*/