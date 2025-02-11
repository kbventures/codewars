/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
	const waitTimes = temperatures.map((currentTemperature, index) => {
		let daysPast = 0
		for (let i = index; i < temperatures.length; i++) {
			if (currentTemperature < temperatures[i]) {
				return daysPast
			}
			daysPast++
		}
		return 0
	})
	return waitTimes
}