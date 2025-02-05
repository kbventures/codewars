export default class Stack<T> {
    private items: T[]; // Array to store stack elements

    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element: T): void {
        this.items.push(element);
    }

    // Pop an element off the stack
    pop(): T | undefined {
        if (this.isEmpty()) {
            console.error("Stack is empty. Cannot pop.");
            return undefined;
        }
        return this.items.pop();
    /*  */}

    // Peek at the top element without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            console.error("Stack is empty. Cannot peek.");
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size(): number {
        return this.items.length;
    }

    // Clear the stack
    clear(): void {
        this.items = [];
    }
}


