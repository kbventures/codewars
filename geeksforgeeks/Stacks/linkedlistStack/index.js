class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const removedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return removedNode.data;
    }

    peek() {
        return this.isEmpty() ? undefined : this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}













































