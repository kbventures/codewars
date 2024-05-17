// V1
// var isValid = function(s) {
//     if(s.length == 1) return false; 
//     const left = "([{";
//     const right = ")]}";
//     const stack = []
//     for(let i=0;i<s.length;i++){
//       if(left.includes(s[i])){
//         stack.push(s[i])
//       } else {
//         let openIdx = left.indexOf(stack[stack.length-1])
//         let closedIdx = right.indexOf(s[i])
//         if(openIdx !== closedIdx) {
//           return false;
//         }
//         stack.pop() 
//       }
//     }
//     if(stack.length !== 0) return false;
//     return true;    
// };


// V2 LinkedList Stack 
class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }

  class LinkedStack{
    constructor(){
        this.top = null; 
        this.size = 0; 
    }

    push(stf){
        let newNode = new Node(stf);
        if(!this.isEmpty){
            this.top = newNode;
        } else {
            newNode.next = this.top; 
            this.top = newNode; 
        }
        this.size++
    }
    pop(){
        let tempData;
        if(this.size === 1){
            tempData = this.top.data; 
            this.top = null; 
        } else {
            tempData = this.top.data;
            this.top = this.top.next; 
        }

        this.size--
        return tempData; 
    }

    peek(){
        return this.isEmpty() ? undefined : this.top.data; 
    }
    isEmpty(){
        return this.size === 0; 
    }
    length(){
        return this.isEmpty() ? undefined : this.size; 
    }
  }
  let newStack = new LinkedStack()
  
  var isValid = function(s) {
    if(s.length ===1) return false; 
    let openP = "([{"
    let closedP = ")]}"
    for(let i =0;i<s.length;i++){
        // console.log(s[i])
        if(openP.includes(s[i])){
            newStack.push(s[i])
        } else {
            let peeky = newStack.peek()
            // console.log("peek",peeky)
            let temp = newStack.pop()
            console.log("temp",temp)
            let openIdx = openP.indexOf(temp)
            let closedIdx = closedP.indexOf(s[i])
            console.log("si", s[i])
            console.log(openIdx, closedIdx)
            if(openIdx !== closedIdx) return false; 
        }
    }

    if(newStack.length()) return false; 
    return true; 
  };

  const finalResult = isValid('{[]}')
  console.log(finalResult)
