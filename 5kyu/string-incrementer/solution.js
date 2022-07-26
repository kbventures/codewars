// PREP
// Paramater is a string, it can be empty, it can contain a word and may has a number at the end
// Returns a new string where if empty it returns 1, one added to the word if only a word and the number is incremented if it
// exists.
// Example: "food" returns "food1" "fooo1"returns "fooo2"
// Pseudocode:
// CHeck if string is empty. If so return 1.
// Check if last character is a number. If not return string and concatenate 1 to it.
// Loop through string and verify individual characters until it's a number
// For this position slice the character from this position, transform it into a number, incremenit by one and then
// return the remanining string and concatenate the incremented number to the string. 

function incrementString(str) {
    const body = str.slice(0, -1);
    const lastDigit = str.slice(-1).match(/[0-9]/);
    return lastDigit === null
        ? str + "1"
        : lastDigit != 9
            ? body + (+lastDigit + 1)
            : incrementString(body) + "0";
}