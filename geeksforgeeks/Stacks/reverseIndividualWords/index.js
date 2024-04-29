// https://www.geeksforgeeks.org/reverse-individual-words/


// function reverseString(str){
//     return str.split('').reverse().join('')
// }

// var revIndWords = function(s) {
//   let sArr = s.split(" ")
//   let stack = []
//   let result = []
//   for( let i =0; i < sArr.length;i++){
//     stack.push(reverseString(sArr[i]))
//   }

//   for( let y =0; y <= stack.length;y++){
//     let temp = stack.pop()
//     result.push(temp)
//   }
//   return result.join(" ");
// };

// const result0 = revIndWords("Hello World")

// console.log(result0)


// LinkedListStack Version 




class Node {
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
    this.size++;
  }

  pop(){
    if(this.isEmpty()){
      return undefined
    } else {
      let removedTop = this.top; 
      this.top = this.top.next; 
      this.size--;
      return removedTop.data;
    }
  }

  peeK(){
    return this.top.data
  }
  length(){
    return this.size()
  }
  isEmpty(){
    return this.size === 0
  }
}


function reverseString(str){
  return str.split('').reverse().join('')
}

var revIndWords = function(s) {
let splitS = s.split(" ")
let result = []
let newStack = new LinkedListStack()
for(let i =0;i<splitS.length;i++){
  let temp = reverseString(splitS[i])
newStack.push(temp)
};

for(let i =0;i<splitS.length;i++){
let temp = newStack.pop()
console.log(temp)
result.push(temp);
};
return result.join(" ");
}

const result0 = revIndWords("Hello World")

console.log(result0)


