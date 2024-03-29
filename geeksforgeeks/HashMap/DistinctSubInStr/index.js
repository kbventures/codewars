// Count number of Distinct Substring in a String
// Given a string, count all distinct substrings of the given string.

// Examples: 

// Input : abcd
// Output : abcd abc ab a bcd bc b cd c d
// All Elements are Distinct

// Input : aaa
// Output : aaa aa a aa a a
// All elements are not Distinct
// Prerequisite : Print subarrays of a given array

// The idea is to use hash table (HashSet in Java) to store all generated substrings. Finally we return size of the HashSet.


// function DistinctSubStr(str){
//     let pointer1 = 0
//     let pointer2 = str.length
//     let result = []

//     while(pointer1 < str.length){
//         let temp = str.slice(pointer1, pointer2)
//         result.push(temp)
//         pointer2--
//         if(pointer2 == pointer1){
//             pointer1++
//             pointer2 = str.length
//         }

//     }
//     return result.join(" ")
// }

// const result = DistinctSubStr("aaa")
// console.log(result)


// V2 HashMap Version
function DistinctSubStr(str){
    let pointer1 = 0
    let pointer2 = str.length
    let result = new Set()

    while(pointer1 < str.length){
        // let temp = str.slice(pointer1, pointer2)
        result.add(str.substring(pointer1,pointer2))
        pointer2--
        if(pointer2 == pointer1){
            pointer1++
            pointer2 = str.length
        }

    }
    return Array.from(result).join(" ")
}

const result = DistinctSubStr("abcd")
console.log(result)