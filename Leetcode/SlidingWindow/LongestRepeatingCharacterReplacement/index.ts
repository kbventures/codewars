// https://leetcode.com/problems/longest-repeating-character-replacement/
function characterReplacement(s: string, k: number): number {
// Counter for each letter's frequency within the sliding window
const charCount: number[] = new Array(26).fill(0);
// Left index of the sliding window
let left: number = 0;
// Right index of the sliding window
let right: number = 0;
// Variable to keep track of the count of the most frequent character within the window
let maxCharCount: number = 0;

    // Iterate over the characters of the string
    for (right = 0; right < s.length; ++right) {
        // Increment the count for the current character
        charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
      
        // Update the max frequency character count seen so far in the current window
        maxCharCount = Math.max(maxCharCount, charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]);
      
        // Check if the current window size minus the count of the max frequency character
        // is greater than k. If so, shrink the window from the left.
        if (right - left + 1 - maxCharCount > k) {
            // Decrement the count for the character that is exiting the window
            charCount[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
            // Move the left pointer to shrink the window
            left++;
        }
    }
  
    // The length of the largest window compliant with the condition serves as the answer
    return right - left;
}