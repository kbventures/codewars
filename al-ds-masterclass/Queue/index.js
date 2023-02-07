class Queue {
    // implement your Queue constructor here
    constuctor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }

    size() {
        return this.list
    }
}

const queue = new Queue()


queue.enqueue('apple')
queue.enqueue('banana')
queue.enqueue('orange')