function longest(s1, s2) {
    // your code
    let concat = s1 + s2;
    let x = Array.from(new Set(concat.split(''))).toString().split(',').sort().join('');
    console.log(x)
    return x
}

