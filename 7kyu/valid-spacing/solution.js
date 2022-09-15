function validSpacing(s) {
    // write your code here
    return s.startsWith(' ') || s.endsWith(' ') || s.includes('  ') ? false : true;
}