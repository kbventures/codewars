function oddOrEven(array) {
    return (array.reduce((init,e)=> init + e,0)) % 2 === 0 ? 'even' : 'odd'
  }