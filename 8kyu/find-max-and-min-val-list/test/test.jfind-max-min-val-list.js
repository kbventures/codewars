const chai = require('chai')
const assert = chai.assert;
const min = require('../find-max-min-val-list');
const max = require('../find-max-min-val-list')


describe("Test", function(){
    it("Examples", function(){
      Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
      Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
      Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
      Test.assertEquals(max([5]), 5);
    });
  });