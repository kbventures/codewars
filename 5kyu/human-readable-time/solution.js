//Prep
//
// Parameter : seconds contains non-negative interger with max range of 359999 seconds
// Returns seconds to human readable format: HH:MM:00 with maximum of 99:59:59
// Example: 3599seconds returns '00:59:59'
// Pseudo code: convert seonds to hours, calcculate the remainder, calculate teh minutes using remainder
// calculate seconds using remainder and minutes
// return result in the HH:MM:SS format 


function humanReadable(seconds) {

    let hours = Math.floor(seconds / 60 / 60);


}






















function humanReadable(seconds) {
    let hours = Math.floor(seconds / 60 / 60);
    let remainder = seconds - hours * 60 * 60;
    let minutes = Math.floor(remainder / 60);
    let second = remainder - minutes * 60;

    return (
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        second.toString().padStart(2, "0")
    );
}