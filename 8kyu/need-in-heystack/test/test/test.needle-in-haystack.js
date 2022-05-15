const chai = require('chai')
const assert = chai.assert;
const findNeedle = require('../findNeedle')


describe("Tests", () => {
    it("test", () => {
  var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
  var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
  var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
  
  Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
  Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
  Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
  Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
    });
  });



