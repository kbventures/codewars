function highAndLow(numbers){
    const numberArr = numbers.split(' ').map(e=>Number(e));
    return `${Math.max(...numberArr)} ${Math.min(...numberArr)}`
    // ...
  }


  highAndLow(["1 2"])