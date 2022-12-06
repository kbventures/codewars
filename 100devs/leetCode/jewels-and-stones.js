var numJewelsInStones = function (jewels, stones) {
  let result = {}
  let count = 0;

  for (let i of stones) {

    if (result[i]) {

    } else {

    }
    result[i] ? result[i]++ : result[i] = 1
  }
  for (let e of jewels) {
    if (e in result) {
      count = count + result[e]
    }
  }

  return count;

};

