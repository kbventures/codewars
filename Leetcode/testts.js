// Node based stack attemp
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class StackClass {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        let newNode = new StackNode(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    pop() {
        if (this.top) {
            this.top = this.top.next;
            this.size--;
        }
        else {
            console.log("Stack is empty!");
        }
    }
    peek() {
        if (this.top) {
            return this.top;
        }
        else {
            console.log("Stack is empty!");
        }
    }
    length() {
        return this.size;
    }
}
const newStackClass = new StackClass();
newStackClass.length();
newStackClass.push("Test 0");
console.log(newStackClass);
newStackClass.push("Test 1");
console.log(newStackClass);
newStackClass.length();
newStackClass.push("Test 2");
console.log(newStackClass);
newStackClass.push("Test 3");
newStackClass.length();
newStackClass.peek();
console.log(newStackClass);
newStackClass.peek();
newStackClass.pop();
console.log(newStackClass);
newStackClass.pop();
console.log(newStackClass);
newStackClass.pop();
console.log(newStackClass);
newStackClass.pop();
console.log(newStackClass);
newStackClass.pop();
console.log(newStackClass);
