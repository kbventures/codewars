function reverseString(wrd, reversed = "",  l = wrd.length - 1){
    if(l == -1) return reversed

    return reverseString(wrd, reversed = reversed + wrd[l], l -1 )
}

const result = reverseString("rev")
console.log(result);