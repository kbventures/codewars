// https://www.geeksforgeeks.org/remove-characters-from-the-first-string-which-are-present-in-the-second-string/



// Given two strings string1 and string2, remove those characters from the first string(string1) which are present in the second string(string2). Both strings are different and contain only lowercase characters.
// NOTE: The size of the first string is always greater than the size of the second string( |string1| > |string2|).

// Example:

//     Input:
//     string1 = “computer”
//     string2 = “cat”
//     Output: “ompuer”
//     Explanation: After removing characters(c, a, t)
//     from string1 we get “ompuer”.

//     Input:
//     string1 = “occurrence”
//     string2 = “car”
//     Output: “ouene”
//     Explanation: After removing characters
//     (c, a, r) from string1 we get “ouene”.

// Array Stack Solution

// function arrStack(str1, str2){
//     let stack = []

//     let set = new Set(str2)

//     for(let i =0; i<str1.length;i++){
//         if(!set[str1[i]]){
//             stack.push(str1[i])
//         }
//     }
//     return stack; 
// }


// const result0 = arrStack("computer","cat");


// Linkedlist Stack Solution





class Node{
    constructor(data){
        this.data = data;
        this.next = null; 
    }
}

class LinkedListStack {
    constructor(){
        this.top = null; 
        this.size =0; 
    }

    push(stf){
        let newNode = new Node(stf)
        newNode.next = this.top; 
        this.top = newNode; 
        this.size++; 
    }

    pop(){
        if(this.isEmpty()){
            return undefined
        } else {
            let temp = this.top.data
            this.top = this.top.next; 
            this.size--
            return temp; 
        }
    }

    isEmpty(){
        return this.size ===0;
    }

    peek(){
        return this.isEmpty() ? undefined : this.top.data; 
    }

    length(){
        return this.isEmpty() ? undefined : this.size; 
    }
}

function arrStack(str1, str2){
    let newStack = new LinkedListStack()
    let result = ""; 
    for(let i = 0; i<str1.length;i++){
        if(!str2.includes(str1[i])){
            console.log(str1[i])
            newStack.push(str1[i])
            console.log(newStack.peek())
        }
    }

    while(!newStack.isEmpty()){
        let temp = newStack.pop()
        console.log(temp);
        result = temp + result; 
    }
    return result; 

}


const result0 = arrStack("computer","cat");
console.log("result", result0)