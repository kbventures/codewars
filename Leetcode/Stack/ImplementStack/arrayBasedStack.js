// Space Complexity: O(n) ✅ – The array grows dynamically as elements are added.
// Time Complexity:
// push() → O(1) (amortized), but O(n) if resizing occurs 🚨
// pop() → O(1) ✅ (removes from the end, no shifting)
// peek() → O(1) ✅ (accesses the last element)
// size() → O(1) ✅ (.length property is constant time)

class Stack {
    constructor(){
        this.newStack = []
    }

    // push

    push(data){
         this.newStack.push(data)
    }

    // pop
    pop(){
        if(this.isEmpty){
            console.log('Stack is empty!')
        }{
            this.newStack.pop()
        }
    }

    // peek

    peek(){
        if(this.isEmpty){
            console.log("Stack is empty!")
        } else {
            return this.newStack[this.newStack.length -1]
        }
    }

    // size
    size(){
     if(this.isEmpty()){   
   console.log("fuck") 
    } else {
        console.log("Length: ",this.newStack.length-1)
    }
}

    isEmpty(){
        return this.newStack.length == 0
    }
}

const testingStack = new Stack()

testingStack.peek()

testingStack.push("Haha")
console.log(testingStack)
testingStack.push("hoho")
testingStack.push("hihi")
console.log(testingStack)
testingStack.push("huhu")
const testingPeek = testingStack.peek()
console.log(testingPeek)
testingStack.pop()
testingStack.size()
