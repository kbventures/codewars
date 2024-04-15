// Find the minimum distance between the given two words
// Last Updated : 12 Jul, 2023
// Given a list of words followed by two words, the task is to find the minimum distance between the given two words in the list of words.

// Examples:

// Input: S = { “the”, “quick”, “brown”, “fox”, “quick”}, word1 = “the”, word2 = “fox”
// Output: 3
// Explanation: Minimum distance between the words “the” and “fox” is 3

// Input: S = {“geeks”, “for”, “geeks”, “contribute”,  “practice”}, word1 = “geeks”, word2 = “practice”
// Output: 2
// Explanation: Minimum distance between the words “geeks” and “practice” is 2



// Approach: Follow the steps to solve this problem:

// Initialize the variables d1 = -1, d2 = -1 and ans = INT_MAX.
// Traverse the string and check:
// If, s[i] is word1 then update d1 = i.
// If, s[i] is word2 then update d2 = i.
// If, d1 != -1 and d2 != -1, then update ans = min(ans, abs(d1-d2)).
// After traversing the string, return ans.
// Below is the implementation of the above approach.


function shortestDistance(s, word1, word2)
{
    let s1 = -1;
    let s2 = -1;
    let result=undefined; 

    for(let i =0; i< s.length; i++){
        if(s[i]== word1){
            s1=i;
        }
        if(s[i]==word2){
            s2=i
        }
        if(s1 !== -1 && s2 !== -1 && result == undefined){
            result = Math.abs(s1-s2)  
        } else if (result){
            result > Math.abs(s1 -s2) ? result = Math(abs(s1-s2)): result; 
        }
    }

    return result
}
 
// Driver Code
        let S
        = [ "fox", "the", "quick", "brown", "quick","the" ];
 
    let word1 = "the", word2 = "fox";
 
    // Function Call
    console.log(shortestDistance(S, word1, word2));
 
// This code is contributed by sanjoy_62.