function solution(str){
    let sol =''; 
    for(let i=str.length-1;i>=0; i--){
        sol += str[i]
    }
    return sol; 
}



// solution('word')


module.exports = solution;

/*
function solution(str){
  return str.split('').reverse().join('');  
}
*/