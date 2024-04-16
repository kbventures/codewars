// Check if given String is Pangram or not
// Last Updated : 21 Mar, 2023
// Given a string Str. The task is to check if it is Pangram or not. 

// A pangram is a sentence containing every letter in the English Alphabet.

// Examples: 

// Input: “The quick brown fox jumps over the lazy dog” 
// Output: is a Pangram 
// Explanation: Contains all the characters from ‘a’ to ‘z’] 



// Input: “The quick brown fox jumps over the dog”
// Output: is not a Pangram 
// Explanation: Doesn’t contain all the characters from ‘a’ to ‘z’, as ‘l’, ‘z’, ‘y’ are missing

// Recommended Problem
// Panagram Checking
// Strings
// Data Structures
// Solve Problem
// Submission count: 73.6K
// Approach 1: Below is the idea to solve the problem

// Create a mark[] array of Boolean types and iterate through all the characters of the string and mark it as visited. Lowercase and Uppercase are considered the same. So ‘A’ and ‘a’ are marked in index 0 and similarly ‘Z’ and ‘z’ are marked in index 25.

// After iterating through all the characters check whether all the characters are marked or not. If not then return false as this is not a pangram else return true. 

// Follow the below steps to Implement the idea:

// Create a bool vector mark[] of size 26.
// Iterate through all characters of the string str and mark str[i] – ‘a’ or str[i] – ‘A’ as 1 for lower and upper characters respectively.
// Iterate through all the indices of mark[] 
// If all indices are marked visited then return is a Pangram 
// Else return  is not a Pangram.
// Below is the Implementation of above approach



/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if (sentence.length < 26) {
        return false; // If the sentence is shorter than 26 characters, it cannot be a pangram
    }

    let hash = {};
    let foundCount = 0;

    for (let letter of sentence) {
        if (!hash[letter]) {
            hash[letter] = true; // Use a set to track unique letters encountered
            foundCount++;

            if (foundCount === 26) {
                return true; // Early exit once all letters are found
            }
        }
    }

    return false; // If we finish the loop without finding all letters, it's not a pangram
};

