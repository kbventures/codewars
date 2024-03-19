// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    // Only reverse vowels for each other
    let stringArr = s.split("");
    let start = 0;
    let end = stringArr.length -1;
    let endIndex = stringArr.length -1; 
    // console.log(Math.floor((endIndex+2)/2))
    let vowels = ['a','e','i','o','u']
    // console.log(Math.floor((endIndex+2)/2))
    // Math.floor((end+1)/2) Uneven middile 5 = 3 Even middle 4 = 3
for (let i = 0; i <= Math.floor((endIndex + 1) / 2); i++) {
    console.log(stringArr[start], stringArr[end])
    if(vowels.includes(stringArr[start].toLowerCase()) && vowels.includes(stringArr[end].toLowerCase())){
        console.log("working?")
        let temp = stringArr[start];
        stringArr[start] = stringArr[end];
        stringArr[end] = temp;
        start++;
        end--;
        // console.log(stringArr)
    } else if (!vowels.includes(stringArr[start].toLowerCase())){
        console.log("working 2")
        start++
        if(!vowels.includes(stringArr[end].toLowerCase())){
            console.log("working 2.1")
            end--
        }
    } else if (!vowels.includes(stringArr[end].toLowerCase())){
        console.log("working 3")
        end--
    }
    if(stringArr.length == 2) return stringArr.join("")
}

return stringArr.join("") 
};

// const result = reverseVowels("hello")
// // const result = reverseVowels("leetcode")
// console.log("result",result)
// // // Output: "leotcede"
// console.log("result",result)

// const result = reverseVowels("Ai")
// // // Output: "leotcede"
// console.log("result",result)

// const result = reverseVowels("race a car")
// console.log("result",result)
// // expected "raca e car"



const result = reverseVowels("Marge, let's \"went.\" I await news telegram.")
// const result = reverseVowels("leetcode")
console.log("result",result)

// Expected Marge, let's \"went.\" i awaIt news telegram.