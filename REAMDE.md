# Problems to Revisit

- [x] Leetcode 347 Top K most frequent elements (completed again on August 9th)
- [x] Leetcocde 49 Group anagrams (completed August 19, 2022)
- [ ] Leetcode 36 Valid Sudoku

# Codewars Solutions

A colletion of codewars problems and their solutions.

## Lessons Learned from convertHexToRGB

I learned that the `parseInt` function accepts two arguments: a string and an optional radix (base). `parseInt(string, radix)` lets us convert strings to numerical values even if they are not in base 10. This makes it a very convienient function when working with hexadecimal values.

## Lessons Learned from primeFactors

I learned that to write down the prime factor decomposition for n I don't necessarily have to find all primes up to n. I can just iterate i from 2, 3, ... , n and anytime n is divisible by i, i must be a prime factor since we're incrementing i up from 2. If keep dividing n by i until it is no longer divisible than we gather all the prime factors of n from smallest to largest.

## Lessons Learned from breakCamelCase

Boolean checks with a more "functional" style are easier to read.

## Lessons Learned from arrayHelpers

I learned that there are two main ways of extending the `Array` "class" or constructor function. The first is to simply add methods to the `Array.prototype` property directly. Although this works, the better way of extending the `Array` class is to use the `Object.defineProperty(obj, propName, options)` method. `obj` is the object on which to define the property, `propName` is the name of the property and `options` is an object with the property value and other configuration options. Using this, we can define a new property on any object and it will be NOT be enumerable or writable by default. This means that the new property will not show up in a `for ... of` iteration and the property cannot be reassigned.
