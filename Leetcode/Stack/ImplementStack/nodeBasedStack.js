class Node{
    constructor(data){
        this.data = data; 
        this.next = null; 
    }
}

class Stack{
    constructor(){
        this.top = null; 
        this.size = 0; 
    }
    
    push(data){
        let newNode = new Node(data)
           newNode.next = this.top;
           this.top = newNode;  
           this.size++
    }
    
    pop(){
        if(this.size == 0){
            console.log("Stack is empty!")
        } else{   
       this.top = this.top.next; 

        }
    }
}