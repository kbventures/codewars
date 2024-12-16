// https://leetcode.com/problems/valid-palindrome/

// V1 Brute force

// var isPalindrome = function(s) {
//     // remove spaces
//     let sanitized = ""
//     for(let i =s.length-1; i>=0;i--){

//         // check for numberes between 48 and 57 inclussive ascii 
//         let charCodeNumCheck = s[i].charCodeAt()


//         // This Checks for letters but not numbers
//         let charCodeAt = s[i].toLowerCase().charCodeAt() - 96
//         if(charCodeAt < 27 && charCodeAt > 0){
//             sanitized =  s[i].toLowerCase() + sanitized;

//         }  else if (charCodeNumCheck > 47 && charCodeNumCheck < 58){
//             sanitized = s[i] + sanitized; 
//         }
//     }
//     if(s.length == 0) return false; 
//     return sanitized == sanitized.split('').reverse().join('')
// };

// V2 Optimised Brute Froce 
// var isPalindrome = function(s) {
//     // remove spaces
//     let sanitized = ""
//     let revSanitized=""
//     for(let i =s.length-1; i>=0;i--){
//         // check for numberes between 48 and 57 inclussive ascii or 97-122 inclusive for lower case letters
//         let charCodecheck = s[i].toLowerCase().charCodeAt()
//         if((charCodecheck > 47 && charCodecheck < 58)||(charCodecheck > 96 && charCodecheck < 123)){
//             revSanitized = revSanitized + s[i].toLowerCase()
//             sanitized =  s[i].toLowerCase() + sanitized;
//         }
//     }
//     if(s.length == 0) return false; 
//     return sanitized == revSanitized
// };

// // V3 Two Pointers

// var isPalindrome = function(s) {
//     let left =0;
//     let right = s.length -1
//     let r="";
//     let l = "";
 
//     while(left <= right){
//         let leftCharCode = s[left].toLowerCase().charCodeAt()
//         let rightCharCode = s[right].toLowerCase().charCodeAt()
//         console.log(leftCharCode,rightCharCode)

//         if(((leftCharCode > 47 && leftCharCode < 58)||(leftCharCode > 96 && leftCharCode < 123)) && (rightCharCode > 47 && rightCharCode < 58)||(rightCharCode > 96 && rightCharCode < 123)){
//             l += s[left]
//             r = s[right] + r; 
//         } else if((leftCharCode > 47 && leftCharCode < 58)||(leftCharCode > 96 && leftCharCode < 123)){
//             l += s[left]
//         } else if ((rightCharCode > 47 && rightCharCode < 58)||(rightCharCode > 96 && rightCharCode < 123)){
//             r = s[right] + r; 
//         }
//         left++
//         right--
//         console.log(l,r)
//     }
//  };


//  const result = isPalindrome("A man, a plan, a canal: Panama")
//  console.log("result ", result)



// V4 Two Pointers

/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     let left =0;
//     let right = s.length -1
 
//     while(left <= right){
//         let leftCharCode = s[left].toLowerCase().charCodeAt()
//         let rightCharCode = s[right].toLowerCase().charCodeAt()
//         if( ((leftCharCode > 47 && leftCharCode < 58)||(leftCharCode > 96 && leftCharCode < 123)) && ((rightCharCode > 47 && rightCharCode < 58)||(rightCharCode > 96 && rightCharCode < 123)) ){
//             if(s[left].toLowerCase() !== s[right].toLowerCase()) return false; 
//             left++
//             right--

//         } else if((leftCharCode > 47 && leftCharCode < 58)||(leftCharCode > 96 && leftCharCode < 123)){
//             right--
//         } else if((rightCharCode > 47 && rightCharCode < 58)||(rightCharCode > 96 && rightCharCode < 123)){
//             left++
//         } else {
//             left++
//             right--
//         }
//     }
//     return true; 
//  };



//  const result = isPalindrome("race a car")
//  console.log("result ", result)


 // Cleanr time complexity optimised version

 var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        // Skip non-alphanumeric characters
        if (!isAlphanumeric(s[left])) {
            left++;
            continue;
        }
        if (!isAlphanumeric(s[right])) {
            right--;
            continue;
        }

        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}