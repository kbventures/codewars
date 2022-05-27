function squareOrSquareRoot(array) {

  return array.map((e, i, a) => {
    return Number.isInteger(Math.sqrt(e)) === true ? Number.isInteger(Math.sqrt(e)) : e * 2;
  })
}

