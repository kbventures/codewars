// PREP
//
// Parameter string which contains operation type, value1 and value2 contains number
// Return the result of the evaluated expression

function basicOp(operation, value1, value2) {
    // Code
    //Pseudocode: concatenat numberes with operation string to form a single string
    // return and evaluate string as  mathematical equation
    let temp = value1 + operation + value2
    return eval(temp)
}
// Examle basic(-,1,1) returns 0