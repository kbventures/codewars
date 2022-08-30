function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
  
    const test = dna.split("T").join("U")
    console.log(test)
}
  


DNAtoRNA("GTAT") 
module.exports = DNAtoRNA;