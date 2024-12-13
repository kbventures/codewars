// https://leetcode.com/problems/valid-palindrome/

// V1 Brute force

var isPalindrome = function(s) {
    // remove spaces
    let sanitized = ""
    for(let i =s.length-1; i>=0;i--){

        // check for numberes between 48 and 57 inclussive ascii 
        let charCodeNumCheck = s[i].charCodeAt()


        // This Checks for letters but not numbers
        let charCodeAt = s[i].toLowerCase().charCodeAt() - 96
        if(charCodeAt < 27 && charCodeAt > 0){
            sanitized =  s[i].toLowerCase() + sanitized;

        }  else if (charCodeNumCheck > 47 && charCodeNumCheck < 58){
            sanitized = s[i] + sanitized; 
        }
    }
    if(s.length == 0) return false; 
    return sanitized == sanitized.split('').reverse().join('')
};

// V2 Optimised Brute Froce 
var isPalindrome = function(s) {
    // remove spaces
    let sanitized = ""
    let revSanitized=""
    for(let i =s.length-1; i>=0;i--){
        // check for numberes between 48 and 57 inclussive ascii or 97-122 inclusive for lower case letters
        let charCodecheck = s[i].toLowerCase().charCodeAt()
        if((charCodecheck > 47 && charCodecheck < 58)||(charCodecheck > 96 && charCodecheck < 123)){
            revSanitized = revSanitized + s[i].toLowerCase()
            sanitized =  s[i].toLowerCase() + sanitized;
        }
    }
    if(s.length == 0) return false; 
    return sanitized == revSanitized
};

