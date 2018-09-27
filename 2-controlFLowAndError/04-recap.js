/*
RECAP
*/

let stringExample = 'string';
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;

//if else example
if (typeof conditionExample === 'string'){
    console.log('yep, it\'s a string');
} else if(typeof conditionExample === 'number'){
    console.log("yep, it\'s a number")
} else if (typeof condisionExample === 'boolean'){
    console.log("yep, it's a boolean!");
}

console.log(typeof conditionExample);

//switch
switch(typeof conditionExample) {
    case 'string':
    console.log('this is a string');
    break;
    case 'number':
    console.log('this is a number');
    break;
    default:
    console.log('this variable is not a sting or number');
    break;
}

//ternary
(typeof conditionExample === 'string') ? console.log('our variable is a string'):
(typeof conditionExample === 'number') ? console.log('var is num'):
(typeof conditionExample === 'undefined') ? console.log('out bar is undef'):
console.log('this is our defauly case');

let FB = 15;
//if else
if(FB % 3 === 0 && FB % 5 === 0){
    console.log('Fizz Buzz');
} else if (FB % 5 === 0){
    console.log('Buzz');
} else if (FB % 3 === 0){
    console.log('Fizz')
} 

//switch
switch(true){
    case(FB % 15 === 0):
console.log('Fizz Buzz')
break;
case (FB % 5 === 0):
console.log('Buzz')
break;
case (FB % 3 === 0):
console.log('Fizz');
break;
}

//ternary
(FB % 15 === 0) ? console.log('Fizz Buzz'):
(FB % 5 === 0) ? console.log('Buzz'):
(FB % 3 === 0) ? console.log('Fizz'):
console.log('Not Fizz, Buzz, or Fizz Buzz');