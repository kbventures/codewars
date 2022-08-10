// PREP
//
// Parater: is a whole minimum 5 digit integer
// Returns: the largest 5 digit consecutive number
// Example: 101234 returns 01234
// Pseudocode: Make a map out of the digits.  Loop through every digit starting from the beginning.
// Slice 5 digits from the currenty index.
// Slice 1 digit from the current index but add 4 consecutive numbers to this one.
// Compre the the slices.  
// If they are identical this becomes the current largest 5 consecutive digit.
// Other we move the index by 1 and repeat the same process.
// We finish this loop when there less 5 digits in the loop. 

function solution(input) {
    if (input.length <= 5) return input;
    let currentLargest = input.slice(0, 5);
    for (let i = 1; i <= input.length - 5; i++) {
        let testing = input.slice(i, i + 5);
        if (testing > currentLargest) {
            currentLargest = testing;
        }
    }
    console.log("2" > "1")
    return Number(currentLargest);
}

function solution(digits) {
    let answer = 0;

    for (let i = 0; i < digits.length; i++) {
        let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
        if (Number(number) > answer) {       //convert to number and compare against answer
            answer = Number(number);
        }
    }
    return answer;