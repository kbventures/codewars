function solve(a, b) {
    return (a + b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
};