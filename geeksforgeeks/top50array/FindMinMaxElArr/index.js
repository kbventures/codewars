// Program to find the minimum (or maximum) element of an array
// Given an array, write functions to find the minimum and maximum elements in it. 

// The most simplest way to find min and max value of an element is to use inbuilt function sort() in java. So, that value at 0th position will min and value at nth position will be max.

//v1
// function MinMax(arr){
//     if(arr.length == 1) return [arr[0],arr[0]]

//     let min = arr[0]
//     let max = arr[0]
    

//     for(let i = 0; arr.length > i; i++){
//         if(arr[i]<min){
//             min = arr[i]
//         }

//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
        
//     return [min, max]

// }


// const [min1, max2 ] = MinMax([1,1000,5,2000,6,-1,10000000])

// const [min3, max4 ] = MinMax([1,1000,5,2000,6,8,-1,10000000])


// console.log(min1, max2, min3, max4)

function MinMax(arr){
    if(arr.length == 1) return [arr[0],arr[0]]

    let min = arr[0]
    let max = arr[0]
    

    for(let i = 0; arr.length > i; i++){
        if(arr[i]<min){
            min = arr[i]
        }

        if(arr[i] > max){
            max = arr[i]
        }
    }
        
    return [min, max]

}


const [min1, max1 ] = MinMax([1,1000,5,2000,6,-1,10000000])

const [min2, max2 ] = MinMax([1,1000,5,2000,6,8,-1,10000000])


console.log(min1, max1, min2, max2)