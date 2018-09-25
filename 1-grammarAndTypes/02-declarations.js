/*
VARIABLES

notes on variables:
1) a variable must begin with a letter, underscore or dollar sign
2) you can use numbers, but they must follow one of the above
3) JavaScript is case sensitive-- 'hello' and 'Hello' are different
*/

var a = 1; 
var b = 2;

console.log(a+b); //3

/* 
DECLARATIONS

Declarations are the LEFT SIDE of a variable
    a)it is simplyu the var x
    b)it is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
    a)set the value of the variable
    b)includes the variable name (x), the assignment (=), and the value (10) => x = 10
*/

var x;
console.log('Declaration:', x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 2:', x);

/*
var, let and const:
var = 'old' js keyword for variables
let = 'new' js keyword for variables (introduced in ES6)
const = also 'new'; declares unchgangeable variables
*/

let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);

today = 'lovely!'
console.log(today, elevenFifty);

elevenFifty = "super";
console.log(today, elevenFifty); //results in error, cannot redefine constant (const)