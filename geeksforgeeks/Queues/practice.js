// V0 Array Queue

// class Queue{
// }

// let tempQ = new Queue()


// V1 Array Queue Class

class Node {
    constructor(data){
   
    }
}

class Queue {
    constructor(){
      
    }

    enqueue(val){
 
    }

    dequeue(){
   
    }
    
    peek(){
 

    }
    isEmpty(){
       
    }

    length(){
 
    }
}



let tempQ = new Queue()
// tempQ.enqueue(2)
// console.log(tempQ)
// tempQ.enqueue(0)
// console.log(tempQ)
// tempQ.enqueue(3)
// console.log(tempQ)
// tempQ.dequeue()
// console.log(tempQ)
// tempQ.dequeue()
// console.log(tempQ)


// Enqueue

// Dequeue

// Peek

// Size

// isEmpty

// V2 Node Queue Class


// Valid parentheses array version

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let left = ["(", "[","{"]
    let right = [")","]","}"]
    let i =0; 
    while(i < s.length){
        
        stack.push(s[i])
        i++
    }
    i =0;
    while(i<stack.length){
        console.log()
    }
    console.log(stack)
    return true; 
};

const result = isValid("()[]{}")