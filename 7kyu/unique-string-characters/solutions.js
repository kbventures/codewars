function solve(a, b) {
    return (a + b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
};

O(n ^ 2)

function solve(a, b) {
    let setA = new Set(a);
    let setB = new Set(b);
    return [...(a + b)].filter(c => !setA.has(c) || !setB.has(c)).join("");
};

O(n)