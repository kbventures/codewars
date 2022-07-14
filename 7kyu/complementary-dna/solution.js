// Prep
//
// Parameter a string container a,,t,g & c 's 
// Returns a new string where the  a become t, t become a, g become c and c become g
// Example ATTGC returns TAACG
// Pseudocode: loop through the string individual letters. Return a new string and replace
// a by t, t by a, g by c and c by g
function DNAStrand(dna) {
    //your code here
    return dna.split('').map(e => {
        if (e === "A") {
            return "T"
        } else if (e === "T") {
            return "A"
        } else if (e === "G") {
            return "C"
        }
        return "G"
    }).join('')
}