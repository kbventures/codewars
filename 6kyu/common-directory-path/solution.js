function getCommonDirectoryPath(pathes) {
    let commonPath = pathes[0];
    for (let i = 1; i < pathes.length; i++) {
        let path = pathes[i];
        let pointer;
        for (let index in commonPath) {
            index = +index;
            if (commonPath[index] !== path[index]) {
                commonPath = path.slice(0, pointer + 1);
            } else if (path[index] === '/') {
                pointer = index;
            }
        }
    }
    return commonPath
}