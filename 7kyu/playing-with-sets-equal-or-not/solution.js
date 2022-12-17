const areEqual = (s1, s2) => s1.size === s2.size && [...s1].every(e => s2.has(e));
const notEqual = (s1, s2) => !areEqual(s1, s2);