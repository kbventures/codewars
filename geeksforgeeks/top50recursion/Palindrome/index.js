function Palindrome(word, index = 0){
    if(index == word.length || word.length == 1) return true
    
    if(word[index] != word[word.length - 1 - index]){
        return false; 
    };  

    return Palindrome(word, index + 1)
}



// False
const result1 = Palindrome("ROME")

// True
const result2 = Palindrome("ROMOR")

// False
const result3 = Palindrome("R")

// True
const result4 = Palindrome("ROMOR")

console.log(result1, result2, result3, result4)

