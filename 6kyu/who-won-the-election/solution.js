// Solution 0
function getWinner(list) {
    let win = list.length / 2
    let obj = {};

    for (key of list) {
        obj[key] ? obj[key]++ : obj[key] = 1
    }
    for (let vote in obj) {
        if (obj[vote] > win) return vote
    }
    return null
}

// Solution 1
function getWinner(list) {
    let win = list.length / 2
    let obj = {};
    list.map(elem => obj[elem] = obj[elem] ? obj[elem] + 1 : 1)
    for (let vote in obj) {
        if (obj[vote] > win) return vote
    }
    return null
}

// solution 2

function getWinner(listOfBallots) {
    var res = [];
    for (var i = 0; i < listOfBallots.length; i++) {
        if (res[listOfBallots[i]] == null) {
            res[listOfBallots[i]] = 1;
        } else {
            res[listOfBallots[i]]++;
        }

        if (res[listOfBallots[i]] > listOfBallots.length / 2) {
            return listOfBallots[i];
        }
    }
    return null;
}

// solution 3
function getWinner(listOfBallots) {
    const votes = countVotes(listOfBallots);
    const [winner, count] = giveWinner(votes);

    return count > listOfBallots.length / 2 ? winner : null
}

function countVotes(list) {
    return list.reduce((acc, val) => {
        if (acc[val]) {
            acc[val]++
        } else {
            acc[val] = 1
        }
        return acc
    }, {})
}

function giveWinner(votes) {
    let max = 0;
    let winner;
    for (let candidate in votes) {
        const count = votes[candidate];
        if (count > max) {
            max = count
            winner = candidate
        }
    }
    return [winner, max]
}