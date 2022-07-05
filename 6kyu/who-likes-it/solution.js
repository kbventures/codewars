//PREP
// 
// Paramters names is an Array of String Names
//
// Returns the following possible solutions:
/*
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/
// Pseudocode
// Checks the lenght of array of names and returns the solution based on that number
// The returned scrips uses the names in the array as fillers
// if There are 4 or more names, the last filler will be a number calculated by
// substracting the lenght of hte array -2

function likes(names) {
    // TODO
    if (names.length === 0) {
        return "no one likes this"
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

  // Example
  // likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');

/*
function likes(names) {
names = names || [];
switch(names.length){
  case 0: return 'no one likes this'; 
  case 1: return names[0] + ' likes this';
  case 2: return names[0] + ' and ' + names[1] + ' like this'; 
  case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
}
}
*/