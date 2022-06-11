
// PREP
//
// Parameter: array container how many steps climbed eveyr year the last twenty years on specific days of the week
// Return: sum of all the steps climbed the last 20 years
// 

function stairsIn20(s) {

    // Pseudo Code 
    // initial result to 0
    // loop throught arrays
    // get the sum of each arrays and add it to the total
    // return the multiplication of total sum of all arrays by 20 
    let result = 0;
    s.forEach(element => {
        let temp = element.reduce((acc, e) => {
            return acc + e
        }, 0)

        result += temp;
    });
    return (result * 20);
}

// // Example
// stairsIn20([1,1,2,3,4,5,6]) // This exampe returns 22

stairsIn20(stairs)