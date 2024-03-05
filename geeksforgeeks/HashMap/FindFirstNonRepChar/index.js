// Input: “geeksforgeeks”
// Output: f
// Explanation: As ‘f’ is first character in the string which does not repeat.

// find-first-non-repeated-character-in-a-string


// Input: “algorithm”
// Output: a
// Explanation: As ‘a’ is first character in the string which does not repeat.


// The idea is to loop over the string and for every character check the occurrence of the same character in the string. 
// If the count of its occurrence is 1 then return that character. Otherwise, search for the remaining characters.

// V1 Probably Incorrect
// function FindFirstNonRepChar(arr){

//     const sorted = arr.split("").sort((a, b) => a.localeCompare(b)).join("");
//     // console.log(sorted)

// const HashMap = {}
// let num = 0; 
// let temp = sorted[0]
// for(const index of sorted){
//     if(index == temp){
//         num++
//     } else if( index !== temp){
//         if(num == 1){
//             return temp
//         } 
//             temp = index; 
//             console.log("switch",temp)
//             num =1; 
//         }
//     }

// }

// const result  = FindFirstNonRepChar("Geeksforgeeks")
// console.log(result)


// V2 Hashmap the whole world first and keep track of the first occurence of a single letter while iterating over it!(My version!)


// function FindFirstNonRepChar(arr){
// let HashMap = {}

// for(const i of arr){
//     if(!HashMap[i]){
//         HashMap[i]=1; 
//     } else {
//         HashMap[i]++
//     }
// }

// for(const z in HashMap){
//     if(HashMap[z] == 1) return z
// }

// }

// const result  = FindFirstNonRepChar("Geeksforgeeks")
// console.log(result)


// V3 Improved version but not mine 
function findFirstNonRepChar(str) {
    const charCountMap = {};
    const charOrder = [];

    for (const char of str) {
        charCountMap[char] = (charCountMap[char] || 0) + 1;

        // Keep track of the order of characters encountered
        if (charCountMap[char] === 1) {
            charOrder.push(char);
        } else {
            // Remove from the order if the character is repeating
            const index = charOrder.indexOf(char);
            if (index !== -1) {
                charOrder.splice(index, 1);
            }
        }
    }

    // The first element in charOrder is the first non-repeating character
    return charOrder.length > 0 ? charOrder[0] : null;
}

const result = findFirstNonRepChar("Geeksforgeeks");
console.log(result);
