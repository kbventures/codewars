// PREP
// 
// Parameter: is an object containing key which is a language and a value which is a test score of number type
// Return the an array of strings containing the name of the subjects which have scores that greater or equal to 60
// Example
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// Pseudocode: 

// We will need through the objects key value pair and push the name of the courses with a score higher or equal to 60 to a new array in descending value

function myLanguages(results) {
    let result = []
    Object.keys(results).forEach(function (key, index) {
        if (results[key] >= 60) { result.push(results[key]) }
    });

    result.sort((a, b) => b - a)
    console.log(result)

    return result.map(e => {
        return Object.keys(results).find(key => results[key] === e);
    })


}

function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a, b) => results[b] - results[a]);
}



myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 })


// Ojbect needs to be reorderd so the key's value are in an descending order
// { "Ruby": 80, "Python": 65, "Java": 10 }
// Look through the object key/value pairs.  If the score is higher or equal to 60 push the respective key to a new array).
// Return Resulting Array.
