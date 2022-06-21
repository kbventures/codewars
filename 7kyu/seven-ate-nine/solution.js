// PREP
//
// Paramter str is a string of numbers
// Returns a new string number where the 9 between two seons are removed
// 

// Pseudocode: loop throught string, if string equals 7, check the next two, if the first of the following 2 is 9 ad 7, extract the 9 from the string;
// return new string with exracted nines if ant

function sevenAte9(str) {


    let newString = ""
    for (let i = 0; i < str.length; i++) {

        if (str[i - 1] == "7" && str[i] == "9" && str[i + 1] == "7") continue
        newString += str[i]
    }

    return newString

}

  // sevenAte9('797') returns 77
  // sevenAte9('798797') returns 79877