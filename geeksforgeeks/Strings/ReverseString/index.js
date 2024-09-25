/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// V1
// var reverseString = function(s) {
//     function reverse(x,y){
//         let tempX = x;
//         x = y;
//         y = tempX
//         return [x, y]
//     }

//     let k = s.length-1;
//     let j =0; 

//     while(j < k){
//         let [x,y] = reverse(s[j],s[k])
//         s[j] = x;
//         s[k] = y; 
//         j++;
//         k--;
//     }

//     return s
    
// };


// V2
var reverseString = function(s) {
    let k = s.length-1;
    let j =0; 

    while(j < k){
        let temp = s[j]
        s[j] = s[k]
        s[k] = temp; 
        j++;
        k--;
    }

    return s
    
};

const result = reverseString(["h","e","l","l","o"])
console.log(result)