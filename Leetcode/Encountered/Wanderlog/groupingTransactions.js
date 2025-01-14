// Problem: Group Transactions by Count and Name
// You are given an array of strings called transactions, where each string represents a transaction item. Your task is to group the transactions by their names, count their occurrences, and return a list of strings formatted as "name count".

// The result should be sorted by the count in descending order, and if two or more items have the same count, they should be sorted alphabetically in ascending order.

// Example:

// Input:
// ["prune", "banana", "pear", "apple", "prune"]

// Output:
// ["prune 2", "apple 1", "banana 1", "pear 1"]

// Constraints:
// The length of transactions will be between 1 and 10^4.
// Each string in transactions will consist of lowercase English letters and have a length of at most 20.
// Function Signature:
// javascript
// Copy code
// function groupTransactions(transactions) {
//     // Your code here
// }
// Write a function groupTransactions(transactions) to solve this problem.

const transactions = ["prune", "banana", "pear", "apple", "prune"]

function groupTransactions(transactions) {
    let obj = {}

    for(let t of transactions){
        obj[t] ? obj[t]++ : obj[t]= 1;
    }
    let arrayOfKeyValuesObjects = Object.entries(obj).map(e => {
        return {name: e[0],count: e[1]} 
    })

    arrayOfKeyValuesObjects.sort(function (item1, item2) {

        // Sort by votes
        // If the first item has a higher number, move it down
        // If the first item has a lower number, move it up
        if (item1.count > item2.count) return -1;
        if (item1.count < item2.count) return 1;
    
        // If the votes number is the same between both items, sort alphabetically
        // If the first item comes first in the alphabet, move it up
        // Otherwise move it down
        if (item1.name > item2.name) return 1;
        if (item1.name < item2.name) return -1;
    
    });
    let result = Object.entries(arrayOfKeyValuesObjects).map(e=>{
        return `${e[1].name} ${e[1].count}`;
    });
    // returns [ 'bin 3', 'can 1' ]
return result
}

const finalResult = groupTransactions(transactions)
console.log("finalResult", finalResult)

// Output:
// ["prune 2", "apple 1", "banana 1", "pear 1"]