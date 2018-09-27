/*
HOISTING
*/
console.log(scissors); //undefined
var scissors = 'blue';

console.log(scissors); //blue


hello();
function hello(){
    console.log('hoisting is... interesting')
}
