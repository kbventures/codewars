function largestPairSum(numbers) {
    //TODO: Write your Code here
    let indexOfFirstLargestNumber = numbers.indexOf(Math.max(...numbers));
    let firstLargestNumber = Math.max(...numbers)
    numbers.splice(indexOfFirstLargestNumber, 1)
    return (firstLargestNumber + Math.max(...numbers))
}