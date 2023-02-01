// function mygcd(x,y){
//   //your code here
//   for(let i=Math.min(x,y); i>0;i--){
//     console.log(i)
//     if(x % i === 0 && y % i === 0){
//       return i
//     }
//   }
// }

function mygcd(x, y) {
    //your code here
    while (y > 0) {
        let temp = y;
        y = x % y
        x = temp
    }
    return x
}


function mygcd(x, y) {
    return y === 0 ? x : mygcd(y, x % y)
}