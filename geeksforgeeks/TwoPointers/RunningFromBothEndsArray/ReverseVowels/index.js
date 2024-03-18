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

    let start = 0;
    let end = s.length -1
    let vowels = ['a','e','i','o','u']
    // Math.floor((end+1)/2) Uneven middile 5 = 3 Even middle 4 = 3
for (let i = 0; i < Math.floor((end + 1) / 2); i++) {
    console.log(s[start], s[end])
    if(vowels.includes(s[start]) && vowels.includes(s[end])){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    } else if (vowels.includes(s[start])){
        start++
    } else if(vowels.includes(s[end])){
        end--
    }

}

console.log(s)    
};

reverseVowels("hello")