function fiveLine(s) {
    let noSpaces = s.trim();
    return `${noSpaces}\n${noSpaces.repeat(2)}\n${noSpaces.repeat(3)}\n${noSpaces.repeat(4)}\n${noSpaces.repeat(5)}`;
}