function absentVowel(x) {
    var vowels = 'aeiou';
    for (var i in vowels) {
        if (x.toLowerCase().indexOf(vowels[i]) == -1) {
            return Number(i);
        }
    }
}
