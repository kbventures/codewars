// https://leetcode.com/problems/min-stack/description/

// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
 

// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.

// SOLUTIONS
// https://baffinlee.com/leetcode-javascript/problem/min-stack.html


// V1 Solution 1 Utilising a array
var MinStack = function() {
    this.stack = [];
    this.min = []; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(this.min[0]=== undefined){
        this.min.push(val)
    } else {
        let temp = this.getMin()
        this.min.push(temp)
        this.min[this.min.length-1] > val ? this.min[this.min.length-1] = val : this.min[this.min.length-1] = temp; 
        
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
 if(this.stack.length ===0) return undefined
 let tempStack = this.stack.pop();
 let tempMin = this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1] ? this.stack[this.stack.length-1] : undefined; 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1] ? this.min[this.min.length-1] : undefined;  
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let obj = new MinStack()


obj.stack;
console.log("Stack:");
console.log("Min ,Stac, getMin, top: ",obj.min,obj.stack, obj.getMin(), obj.top())

obj.push(-2);
console.log("After pushing -2: ");
console.log("Min ,Stac, getMin, top: ",obj.min,obj.stack, obj.getMin(), obj.top())

obj.push(0);
console.log("After pushing 0: ");
console.log("Min ,Stac, getMin, top: ",obj.min,obj.stack, obj.getMin(), obj.top())

obj.push(-3);
console.log("Push -3:" );
console.log("Min ,Stac, getMin, top: ",obj.min,obj.stack, obj.getMin(), obj.top())

obj.getMin();
console.log("After pushing 2:", obj.stack, obj.min, obj.getMin());
console.log("Min ,Stac, getMin, top: ",obj.min,obj.stack, obj.getMin(), obj.top())

obj.pop();
console.log("Pop: ", obj.pop());
console.log("Min ,Stac, getMin, top: ",obj.min,obj.stack, obj.getMin(), obj.top())

obj.top();
console.log("Get Top: ", obj.top());
console.log("Min ,Stac, getMin, top: ",obj.min,obj.stack, obj.getMin(), obj.top())

obj.getMin();
console.log("getMin:", obj.getMin());
console.log("Min ,Stac, getMin, top: ",obj.min,obj.stack, obj.getMin(), obj.top())

// ["MinStack","push","push","push","getMin","pop","top","getMin"]



// obj.push(3)
// console.log("stack, min, getMin, Top", obj.stack, obj.min, obj.getMin(), obj.top())
// obj.push(2)
// console.log("stack, min, getMin, Top", obj.stack, obj.min, obj.getMin(), obj.top())
// obj.push(1)
// console.log("stack, min, getMin, Top", obj.stack, obj.min, obj.getMin(), obj.top())
// obj.pop()
// console.log("stack, min, getMin, Top", obj.stack, obj.min, obj.getMin(), obj.top())
// obj.pop()
// console.log("stack, min, getMin, Top", obj.stack, obj.min, obj.getMin(), obj.top())
// obj.pop()
// console.log("stack, min, getMin, Top", obj.stack, obj.min, obj.getMin(), obj.top())
