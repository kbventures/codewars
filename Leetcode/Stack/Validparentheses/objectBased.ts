https://leetcode.com/problems/valid-parentheses/
// import Stack from "../ImplementStack/index"; 


// Time complexity of O(n) because we go through the array once and space complexity of O(n) before worst case scenario we add all the
// opening brakets to the array once
function isValid(s: string): boolean {

    class Stack<T> {
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
        }
    
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
    
    
    const newStack = new Stack<string>(); 
    let open:string[] = ['(','[','{' ]
    let close:string[] = [')', ']', '}']
    if(s.length == 1) return false; 
    for(let i = 0; i<s.length;i++){

        if(open.includes(s[i])){
            newStack.push(s[i])
        } else {
            let str:string | undefined = newStack.peek()
            if(str !== undefined && open.indexOf(str) == close.indexOf(s[i])){
                newStack.pop()
            } else {
                return false;
            }
        }
    }
    return newStack.isEmpty() ? true : false; 
    
};








