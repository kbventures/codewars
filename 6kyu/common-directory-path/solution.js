function getCommonDirectoryPath(pathes) {
    let commonPath = pathes[0];
    for (let i = 1; i < pathes.length; i++) {
        let path = pathes[i];
        let pointer;
        for (let index in commonPath) {
            index = +index;
            if (commonPath[index] !== path[index]) {
                commonPath = path.slice(0, pointer + 1);
                break; 
            } else if (path[index] === '/') {
                pointer = index;
            }
        }
    }
    return commonPath
}

// function getCommonDirectoryPath(pathes) {
//     for (let i=0; i<pathes.length; i++) {
//       pathes[i] = pathes[i].split('/');
//     }
    
//     let result = pathes[0];
//     for (let i=1; i<pathes.length; i++) {
//       for (let j=0; j<pathes[i].length; j++) {  
//         if (pathes[i][j] != result[j]) {
//           result.splice(j);
//           break;
//         }
//       }
//     }
    
//     return result.length ? result.join('/') + '/' : result.join('/');
//   }