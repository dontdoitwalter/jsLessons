/*
EXPRESSIONS
*/
console.log(typeof hi); //expetation: function   reality: undefined

var hi = function hi(){
    console.log('hello')
}

hi(); //output -> 'hello'