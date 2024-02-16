function lengthString(str, l = 0 , index = 0){
    if(str.length == index) return l;

    return lengthString(str, l + 1, index + 1)
}



const result = lengthString("fifteen")

console.log(result)