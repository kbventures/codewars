class Stack {
    constructor() {
        this.items = [];
    }

    // Push method adds a new element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Pop method removes the top element from the stack and returns it
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek method returns the top element of the stack without removing it
    peek() {
        return this.items[this.items.length - 1];
    }

    // isEmpty method checks if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // size method returns the number of elements in the stack
    size() {
        return this.items.length;
    }

    // clear method removes all elements from the stack
    clear() {
        this.items = [];
    }

    // print method displays the elements of the stack
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack elements:");
stack.print(); // Output: 1,2,3

console.log("Popped element:", stack.pop()); // Output: 3
console.log("Peeked element:", stack.peek()); // Output: 2
console.log("Is stack empty?", stack.isEmpty()); // Output: false
console.log("Stack size:", stack.size()); // Output: 2

stack.clear();
console.log("Is stack empty after clear?", stack.isEmpty()); // Output: true
