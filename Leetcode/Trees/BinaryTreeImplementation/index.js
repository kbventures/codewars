class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}


const newNode = new Node(1)

console.log(newNode.value)

newNode.left = new Node(2)

console.log(newNode.left.value)

newNode.right = new Node(3)

console.log(newNode.right.value)

newNode.left.left = new Node(4)

console.log(newNode.left.left.value)

console.log(newNode.left.left.left)

class Tree{
    constructor(){
        this.root = null;  
    }

    isEmpty(){
        return this.root == null;
    }

    search(){
        // dfs vs bfs
    }
}