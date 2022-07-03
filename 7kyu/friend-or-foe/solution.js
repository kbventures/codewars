// Prep 
//
// Parameter array of strings
//
// Return array of strings only container names with 4 letters
//
// Example 
// ["Ryan", "Kieran", "Mark"]) Returns ["Ryan", "Mark"]
//
// Pseudocode
// loop through friends list and filter out names with 4 letters
function friend(friends) {
    //your code here

    return friends.filter(e => e.length === 4)
}