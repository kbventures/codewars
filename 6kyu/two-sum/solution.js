// My Solution
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (j !== i) {
                if (numbers[j] + numbers[i] === target) return [j, i]
            }
        }
    }
}

// Brute Force
function twoNumberSum(array, targetSum) {
    let answer = []
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                answer.push(array[i], array[j])
                return answer
            }
        }
    }
    return answer
}

// Hash Map

function twoNumberSum(array, targetSum) {
    let numbersObject = {}
    for (const number of array) {
        let numberWeAreChecking = targetSum — number
        if (numberWeAreChecking in numbersObject) {
            return [numberWeAreChecking, number]
        } else {
            numbersObject[number] = true
        }
    }
    return [];
}

// SORT
function twoNumberSum(array, targetSum) {
    array.sort(function (a, b) { return a - b })
    let leftPointer = 0
    let rightPointer = array.length - 1
    let answer = []
    for (i = 0; i < array.length; i++) {
        if (array[leftPointer] + array[rightPointer] === targetSum) {
            return [array[leftPointer], array[rightPointer]]
        } else if (array[leftPointer] + array[rightPointer] < targetSum) {
            leftPointer++

        } else if (array[leftPointer] + array[rightPointer] > targetSum) {
            rightPointer —
        }
    }
    return answer
}

https://plainenglish.io/blog/ways-to-solve-the-classic-two-sum-algorithm-question-with-an-explanation-on-big-o