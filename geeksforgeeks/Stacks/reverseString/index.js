// https://www.geeksforgeeks.org/stack-set-3-reverse-string-using-stack/


// How to Reverse a String using Stack

// Given a string, reverse it using stack. 

// Example:

//     Input: str = “GeeksQuiz”
//     Output: ziuQskeeG

//     Input: str = “abc”
//     Output: cba

// Approach:

//     The idea is to create an empty stack and push all the characters from the string into it. Then pop each character one by one from the stack and put them back into the input string starting from the 0’th index. As we all know, stacks work on the principle of first in, last out. After popping all the elements and placing them back to string, the formed string would be reversed.

// Follow the steps given below to reverse a string using stack. 

//     Create an empty stack.
//     One by one push all characters of string to stack.
//     One by one pop all characters from stack and put them back to string.

// Below is the implementation of the above approach: