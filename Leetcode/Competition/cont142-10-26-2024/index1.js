// https://leetcode.com/contest/biweekly-contest-142/problems/find-the-original-typed-string-i/description/

// Q1. Find the Original Typed String I
// Easy
// 3 pt.
// Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.

// Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.

// You are given a string word, which represents the final output displayed on Alice's screen.

// Return the total number of possible original strings that Alice might have intended to type.

 

// Example 1:

// Input: word = "abbcccc"

// Output: 5

// Explanation:

// The possible strings are: "abbcccc", "abbccc", "abbcc", "abbc", and "abcccc".

// Example 2:

// Input: word = "abcd"

// Output: 1

// Explanation:

// The only possible string is "abcd".

// Example 3:

// Input: word = "aaaa"

// Output: 4

 

// Constraints:

// 1 <= word.length <= 100
// word consists only of lowercase English letters.

/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let hash = {};
    let totalCount = 1;

    let newSet = new Set();
    // Count occurrences of each character
    for (let char of word) {
        hash[char] = (hash[char] || 0) + 1;
    }
    console.log(hash)
    // Iterate through the hash map to calculate possibilities
    for (let char in hash) {

        console.log(hash[char])
      
    }

    return totalCount
};

// Example usage:
///This is supposed to return 5
console.log(possibleStringCount("abbcccc")); 

// abbcccc
// abcccc 
// abbccc 
// abbcc
// abbc


// Group Anagrams (LeetCode 49)

// Group strings that are anagrams of each other.
// Longest Substring Without Repeating Characters (LeetCode 3)

// Find the length of the longest substring with all unique characters.
// Minimum Window Substring (LeetCode 76)

// Find the smallest substring in s that contains all characters of t.
// Find All Anagrams in a String (LeetCode 438)

// Find all start indices of anagrams of a string p in a string s.
// Valid Anagram (LeetCode 242)

// Check if two strings are anagrams of each other.
// Longest Repeating Character Replacement (LeetCode 424)

// Replace characters to make the longest substring of repeated characters.
// Substring with Concatenation of All Words (LeetCode 30)

// Find all starting indices of substrings that are a concatenation of all words in a list.
// Longest Palindromic Substring (LeetCode 5)

// Find the longest palindromic substring in a string.
// Count Vowels Permutation (LeetCode 1220)

// Count the number of valid strings of length n that can be formed with vowels, where no two vowels are the same.
// Reorganize String (LeetCode 767)

// Reorganize a string so that no two adjacent characters are the same.