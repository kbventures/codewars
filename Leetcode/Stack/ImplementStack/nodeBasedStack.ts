class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export default class Stack<T> {
    private top: Node<T> | null = null;
    private count: number = 0;

    // Push an element onto the stack
    push(element: T): void {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.count++;
    }

    // Pop an element off the stack
    pop(): T | undefined {
        if (this.isEmpty()) {
            console.error("Stack is empty. Cannot pop.");
            return undefined;
        }
        const poppedValue = this.top!.value;
        this.top = this.top!.next;
        this.count--;
        return poppedValue;
    }

    // Peek at the top element without removing it
    peek(): T | undefined {
        return this.top ? this.top.value : undefined;
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.top === null;
    }

    // Get the size of the stack
    size(): number {
        return this.count;
    }

    // Clear the stack
    clear(): void {
        this.top = null;
        this.count = 0;
    }
}
