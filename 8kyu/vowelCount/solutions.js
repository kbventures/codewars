function getCount(str) {
    let vowelsCount = 0;
    
    // enter your magic here
    return (str.match(/[aeoiu]/ig)).length;
  }



  module.exports = getCount;