const chai = require('chai')
const assert = chai.assert;
const numberToString = require('../convert-num-to-string')

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});