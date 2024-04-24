// https://www.geeksforgeeks.org/reverse-an-array-using-stack/



// class Stack {
//     constructor(){
//         this.items = []
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//         return this.items.pop()
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     clear(){
//         this.items = [];
//     }

//     print(){
//         console.log(this.items.toString())

//     }

//     ltf(){
//         return this.items.length
//     }
// }

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseArray = function(s) {
//     let newStack = new Stack()
//     let result = [];

//     for(let i =0; i<s.length;i++){
//         newStack.push(s[i])
//     }

//     newStack.print()

//     for(let i =0; i<s.length;i++){
//         let temp = newStack.pop()
//         console.log(temp)
//         result.push(temp)
//     }


//     return result; 
// };

// const result0 = reverseArray([0, 20, 30, 40, 50 ])

// console.log(result0)



// LinkedListStack Version


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack{
    constructor(){
        this.top = null;
        this.size = 0; 
    }

    push(stuff){
        let newNode = new Node(stuff);
        newNode.next = this.top;
        this.top = newNode; 
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return undefined
        } else {
            let temp = this.top; 
            this.top = this.top.next;
            this.size--; 
            return temp.data;
        }
    }

    isEmpty(){
        return this.size === 0; 
    }

    peek(){
        return this.top.data
    }
    size(){
        return this.size; 
    }
}
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseArray = function(s) {
    let newStack = new LinkedListStack()
    let result = []
    for(let i =0;i< s.length;i++){
        newStack.push(s[i])
    }

    for(let i =0; i<s.length;i++){
        let temp = newStack.pop()
        result.push(temp); 
    }

    return result; 
};

const result0 = reverseArray([0, 20, 30, 40, 50 ])

console.log(result0)