// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
// Try to use Frequency pattern to solve this
// You can assume they are single words, no spaces , no periods, nopunctuations, no numbers, all lower case letters.


function validAnagram(string1, string2) {
    if (string1 === "" && string2 === "") return true;

    let str1 = {}
    let str2 = {}
    for (key of string1) {
        str1[key] ? str1[key]++ : str1[key] = 1;
    }

    for (key of string2) {
        str2[key] ? str2[key]++ : str2[key] = 1;
    }

    for (key in str1) {
        if (!(key in str2)) return false;

        if (str1[key] !== str2[key]) return false;
    }

    return true;

}




console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
