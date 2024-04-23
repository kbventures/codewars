// https://www.geeksforgeeks.org/reverse-an-array-using-stack/



class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    clear(){
        this.items = [];
    }

    print(){
        console.log(this.items.toString())

    }

    ltf(){
        return this.items.length
    }
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseArray = function(s) {
    let newStack = new Stack()
    let result = [];

    for(let i =0; i<s.length;i++){
        newStack.push(s[i])
    }

    newStack.print()

    for(let i =0; i<s.length;i++){
        let temp = newStack.pop()
        console.log(temp)
        result.push(temp)
    }


    return result; 
};

const result0 = reverseArray([0, 20, 30, 40, 50 ])

console.log(result0)