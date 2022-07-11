// Prep
//
//A function with a name which is a number, it receives an argument.  
// It checks to see if the argument is a function or a number.  If its a function it returns 
// this function and its number(function name) as a parameter, otherwise it returns its number(name).
// fucnction(zero) returns the argument function(0) or simply 0 if the argument which expects a function
// doesn't exist
// The other function in the progarm expects a number which is passed by the previous function.  
// It returns a new fucntion which expects a diferent run and itlse fin its block code does the calculatio in its name
// Example zero(plus(zero())) returns 0
// Pseudo code
// number function receives another function. It returns a function with a number argument related to itself.
// example function zero would return either a 0 or it receives a fucntion as an arguement, this fuction with 0 as an argument



function zero(func) { return func ? func(0) : 0 }
function one(func) { return func ? func(1) : 1 }
function two(func) { return func ? func(2) : 2 }
function three(func) { return func ? func(3) : 3 }
function four(func) { return func ? func(4) : 4 }
function five(func) { return func ? func(5) : 5 }
function six(func) { return func ? func(6) : 6 }
function seven(func) { return func ? func(7) : 7 }
function eight(func) { return func ? func(8) : 8 }
function nine(func) { return func ? func(9) : 9 }


function plus(b) { return function (a) { return a + b } }
function minus(b) { return function (a) { return a - b } }
function times(b) { return function (a) { return a * b } }
function dividedBy(b) { return function (a) { return Math.floor(a / b) } }