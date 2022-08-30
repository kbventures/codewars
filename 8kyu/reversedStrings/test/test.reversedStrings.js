const chai = require('chai')
const assert = chai.assert;
const reversedString = require('../reversedStrings')


describe('Complete the solution so that it reverses the string passed into it.', ()=>{
    it("Test suite", () => {
        assert.strictEqual(reversedString('world'), 'dlrow');
        assert.strictEqual(reversedString('hello'), 'olleh');
        assert.strictEqual(reversedString(''), '');
        assert.strictEqual(reversedString('h'), 'h');
      });
})