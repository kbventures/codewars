const chai = require('chai')
const assert = chai.assert;
const centFromYear = require('../century-from-year')



describe('The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.', ()=>{
    it('Given a year, return the century it is in.',()=>{
        assert.deepEqual(centFromYear(1705), 18)
    })

    it('Given a year, return the century it is in.',()=>{
        assert.deepEqual(centFromYear(2000), 20)
    })

    it('Given a year, return the century it is in.',()=>{
        assert.deepEqual(centFromYear(89), 1)
    })
    
})