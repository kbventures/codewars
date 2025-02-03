class Node{
    constructor(data){
    this.next = null; 
    this.data = data;     
    }
}

class NodeStack{
    constructor(){
        // reference to to the top node in the stack
        this.top = null; 
        this.size = 0; 
    }

    push(data){
        let newNode = new Node(data)
        newNode.next = this.top;
        this.top = NewNode;
        this.size++
        }
    }

    pop(){
        if(this.size ==0){
            console.log("Stack is empty!")
        } else if( this.size == 1){
            this.top = null;
            this.size--
        } else {
            this.top = this.top.next; 
            this.size--
        }
    }

const newNodeTest = new NodeStack()
newNodeTest.push("Test0")
console.log(newNodeTest)
newNodeTest.push("Test1")
console.log(newNodeTest)
newNodeTest.push("Test2")
console.log(newNodeTest)
newNodeTest.push("Test3")
console.log(newNodeTest)
newNodeTest.pop()
console.log(newNodeTest)
// newNodeTest.pop()
// console.log(newNodeTest)