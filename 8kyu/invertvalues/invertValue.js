function invert(array) {
    let newArray = [];

    for(let i =0;i<array.length; i++){

        if(array === []){
            return []
        }else if(Math.sign(array[i])==1){
            newArray[i] = array[i] * -1;
        } else {
            newArray[i] = array[i] *-1;
        }
    }
    console.log(newArray)
    return newArray ;
 }



 module.exports = invert;


// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []