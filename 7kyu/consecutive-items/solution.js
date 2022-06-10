//PREP
//
// Parameters arr for array, a for interger value, b interger value
// Returns true if at any time there 2 consecutive values are equal to a and b
//

function consecutive(arr, a, b) {
    // Your code here...

    // Pseudo Code: 
    // result false set to false by default
    // loop through array
    // check for consecutive values, change result value to true if this scenario occurs
    // return boolena result 
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], arr[i + 1])
        if (arr[i] === a && arr[i + 1] === b || arr[i] === b && arr[i + 1] === a) {
            result = true;
            break;
        }
    }
    return result;
}

  // Example:
  // return true consecutive([,1,2,3,4],1,2)
  // return true consecutive([3,7,0,1],2,0)
  // return false consecutive([1,2,3,4],8,0)