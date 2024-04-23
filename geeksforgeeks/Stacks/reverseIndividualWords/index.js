// https://www.geeksforgeeks.org/reverse-individual-words/


function reverseString(str){
    return str.split('').reverse().join('')
}

var revIndWords = function(s) {
  let sArr = s.split(" ")
  let stack = []
  let result = []
  for( let i =0; i < sArr.length;i++){
    stack.push(reverseString(sArr[i]))
  }

  for( let y =0; y <= stack.length;y++){
    let temp = stack.pop()
    result.push(temp)
  }
  return result.join(" ");
};

const result0 = revIndWords("Hello World")

console.log(result0)