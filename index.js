// PREP

// Parameter: Will be an array of strings containing either "good" or "bad". 

// Return: returns a string containing either "Publish!", "I smell a series!" or "Fail!"

// Example: "good" => "Publish!"

// Pseucode: 
// Creat and assign result variable the value of 0.
// Loop throught array and check weather the value is good or bad and increment the respective value
// We return the string result which matches the value of the result varaible






// Well of ideas

// array x for good ides and badieas
// 1 or 2 "Publish!"", > 2 "I smell a series!",no good ideas "Fail!"

function test(['good']) {
    // Creat and assign result variable the value of 0.
    // Loop throught array and check weather the value is good or bad and increment the respective value


    // let counter = arr.reduce((acc,e)=>{
    //     e === "good" ? acc++ : acc; 
    // },0)


    let counter = arr.filter(e => {
        return e === "good";
    })
    // We return the string result which matches the value of the result varaible

    // if(result > 2){
    //     return "I smell a series!"
    // } else if(result > 0){
    //     return "Publish!"
    // } else {
    //     return "Fail!"
    // }
    // return counter.length 
    return counter < 1 ? "Fail!" : result > 2 ? "Publish!" : "I smell a series!";


}