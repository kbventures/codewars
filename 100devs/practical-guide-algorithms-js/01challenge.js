//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]


// My solution
// const uniqSort = function (arr) {
//     const breadcrumbs = {};
//     const temp = []
//     for (key of arr) {
//         breadcrumbs[key] ? breadcrumbs[key]++ : breadcrumbs[key] = 1
//     }

//     for (key in breadcrumbs) {
//         if (breadcrumbs[key] === 1) {
//             temp.push(key)
//         }
//     } console.log(temp)



//     return arr.sort((a, b) => a - b);
// };

// Breadcrumb solution
const uniqSort = function (arr) {
    //     const breadcrumbs = {};
    //     const temp = []
    //     for (key of arr) {
    //         breadcrumbs[key] ? breadcrumbs[key]++ : breadcrumbs[key] = 1
    //     }

    //     for (key in breadcrumbs) {
    //         if (breadcrumbs[key] === 1) {
    //             temp.push(key)
    //         }
    //     } console.log(temp)



    //     return arr.sort((a, b) => a - b);
    // };

    uniqSort([4, 2, 2, 3, 2, 2, 2]); // => [2,3,4]




    //Task: Transform this simple sorting algorithm into a unique sort. 
    // It should not return any duplicate values in the sorted array.

    //input: [1,5,2,1] => output: [1,2,5]
    //input: [4,2,2,3,2,2,2] => output: [2,3,4]

    const uniqSort = function (arr) {
        const breadcrumbs = {};
        const result = [];


        for (let i = 0; i < arr.length; i++) {
            if (!breadcrumbs[arr[i]]) {
                result.push(arr[i])
                breadcrumbs[arr[i]] = true;
            }
        }
        return result.sort((a, b) => a - b);
    };

    console.log(uniqSort([4, 2, 2, 3, 2, 2, 2])); // => [2,3,4]


