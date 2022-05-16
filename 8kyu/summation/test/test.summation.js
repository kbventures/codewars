const chai = require('chai')
const assert = chai.assert;
const summation = require('../summation.js')



describe('summation', function () {
    it('should return the correct total', function () {
      Test.assertEquals(summation(1), 1)
      Test.assertEquals(summation(8), 36)
    })
  })