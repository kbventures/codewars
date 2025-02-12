/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// Brute force O(n^2)
//  const dailyTemperatures = (temperatures) => {
// 	const waitTimes = temperatures.map((currentTemperature, index) => {
// 		let daysPast = 0
// 		for (let i = index; i < temperatures.length; i++) {
// 			if (currentTemperature < temperatures[i]) {
// 				return daysPast
// 			}
// 			daysPast++
// 		}
// 		return 0
// 	})
// 	return waitTimes
// }


// Space complexity O(n) and time complexity O(1) utilizing monotonic decreasing stack: 

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let temperatureStack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (temperatureStack.length > 0 && temperatures[i] > temperatures[temperatureStack[temperatureStack.length - 1]]) {
            let index = temperatureStack.pop();
            result[index] = i - index;
        }
        temperatureStack.push(i);
    }

    return result;
};

