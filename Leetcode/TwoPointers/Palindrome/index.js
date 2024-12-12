// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    // remove spaces
    let sanitized = ""
    for(let i =s.length-1; i>=0;i--){
        let charCodeAt = s[i].toLowerCase().charCodeAt() - 96
        if(charCodeAt < 27 && charCodeAt > 0){
            sanitized =  s[i].toLowerCase() + sanitized;

        }
    }

    conosle.log("0".charCodeAt(), "9".charCodeCat())
    console.log(sanitized)
    if(s.length == 0) return false; 
    return sanitized == sanitized.split('').reverse().join('')
};