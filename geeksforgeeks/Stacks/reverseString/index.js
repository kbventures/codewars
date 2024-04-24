// https://www.geeksforgeeks.org/stack-set-3-reverse-string-using-stack/


// How to Reverse a String using Stack

// Given a string, reverse it using stack. 

// Example:

//     Input: str = “GeeksQuiz”
//     Output: ziuQskeeG

//     Input: str = “abc”
//     Output: cba

// Approach:

//     The idea is to create an empty stack and push all the characters from the string into it. Then pop each character one by one from the stack and put them back into the input string starting from the 0’th index. As we all know, stacks work on the principle of first in, last out. After popping all the elements and placing them back to string, the formed string would be reversed.

// Follow the steps given below to reverse a string using stack. 

//     Create an empty stack.
//     One by one push all characters of string to stack.
//     One by one pop all characters from stack and put them back to string.

// Below is the implementation of the above approach:

// class Stack {
//     constructor(){
//         this.items = []
//     }

//     // Push method adds a new element to the top of the stack
//     push(element){
//         this.items.push(element);
//     }

//     // Pop method removes the top element from the stack and returns it
//     pop(){
//         if(this.isEmpty()){
//             return "Underflow"
//         }
//         return this.items.pop()
//     }

//     // Peek method returns the top element of the stack without removing
//     peek(){
//         return this.items[this.items.length -1]
//     }

//     // isEmpty method checks if the stack is empty
//     isEmpty(){
//         return this.items.length === 0;
//     }

//     // size method removes all elements from the stack
//     clear(){
//         this.items = [];
//     }

//     // print method displays the elements of the stack
//     print(){
//         console.log(this.items.toString())
//     }
//     lth(){
//         return this.items.length;
//     }
// }

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function(s) {
//     const currStack = new Stack()
//     let result = "";

//     for(let i=0;i<s.length;i++){
//         console.log(s[i])
//         currStack.push(s[i])
//     }
//     currStack.print()
//     const stackLength = currStack.lth()
//     for(let i =0; i<stackLength;i++){
//         result += currStack.pop()
//     }
//     return result;
// };

// const result0 = reverseString('hello')

// console.log(result0)




// LinkedListStack Version

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


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
let newStack = new LinkedListStack()
let result = "";
for(let i =0;i<s.length;i++){
    newStack.push(s[i])
}

for(let i =0;i<s.length;i++){
    let temp = newStack.pop()
    result += temp
}

return result; 

};

const result0 = reverseString('hello')

console.log(result0)











