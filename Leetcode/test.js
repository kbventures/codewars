class NodeClass {
    constructor(data) {
        this.data = data;
    }
}
class StackClass {
    constructor() {
        this.top = null;
        this.previous = null;
        this.size = 0;
    }
    //push
    push(d) {
        const newNode = new NodeClass(d);
        if (this.size == 0) {
            this.top = newNode;
        }
        else {
            this.previous = this.top;
            this.top = newNode;
        }
        this.size++;
    }
    // pop
    pop() {
        if (this.top == null) {
            console.log("Stack is empty!");
        }
        else if (this.size == 1) {
            this.top = null;
            this.previous = null;
            this.size = 0;
        }
        else {
            this.top = this.previous;
            this.size--;
        }
    }
    // peek
    peek() {
        if (this.top !== null) {
            console.log(`Top: ${this.top.data}`);
        }
        else {
            console.log("Stack is empty!");
        }
    }
    // size
    length() {
        console.log("Stack length: ", this.size);
        return this.size;
    }
}
const newStack = new StackClass();
newStack.length();
newStack.push("Test 0");
console.log(newStack);
newStack.push("Test 1");
console.log(newStack);
newStack.length();
newStack.push("Test 2");
console.log(newStack);
newStack.push("Test 3");
newStack.length();
newStack.peek();
newStack.pop();
console.log(newStack);
newStack.peek();
newStack.pop();
console.log(newStack);
newStack.peek();
