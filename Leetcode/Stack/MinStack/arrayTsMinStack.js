class ArrayMinStack {
    constructor() {
        this.minStackArray = [];
        this.minValArray = [];
    }
    push(val) {
        this.minStackArray.push(val);
        if (this.minValArray.length == 0) {
            this.minValArray.push(val);
        }
        else if (this.minValArray[this.minValArray.length - 1] > val) {
            this.minValArray.push(val);
        }
    }
    // Needs work to check if the curren min should remain 
    pop() {
        this.minStackArray.pop();
        this.minValArray.pop();
    }
    top() {
        return this.minStackArray[this.minStackArray.length - 1];
    }
    getMin() {
        return this.minValArray[this.minValArray.length - 1];
    }
}
// ["MinStack","push","push","push","getMin","top","pop","getMin"]
// [[],[-2],[0],[-1],[],[],[],[]]
const test = new ArrayMinStack();
test.push(-2);
console.log(test);
test.push(0);
console.log(test);
test.push(-1);
console.log(test);
console.log(test.getMin());
console.log(test.top());
console.log(test.pop());
console.log(test);
console.log(test.getMin());
