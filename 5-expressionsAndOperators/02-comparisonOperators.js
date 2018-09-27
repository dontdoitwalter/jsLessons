/*
Comparison Operators
*/

//equality
console.log('3' == 3); //true -> type coercion
console.log('three' == 3); //false
console.log(0==false==''==null); // 0 is falsey, false is falsey, '' is falsey, null is falsey

//strict equality  -> checks value and type
console.log(3===3); //true
console.log(3 === '3'); //false

//not equal
console.log('4' != 4); //doesn't care about type, output. shows type coercion again -> false 

//strict not equal
console.log('3' !== 3); // checks type and value -> true

//greater than
console.log(3>2);

//less than
console.log(2<3);

//greater than or equal to
console.log(3>=3);

//less than or equal to
console.log(3<=3);

//And:  returns true if the left and right are both true
console.log(true&&true); //output: true
let x=5;
console.log(x < 10 && x > -5); //true
console.log(x<10 && x > 15); //false

let str ='a';
console.log(str < 'p');

// Or:return true if the loft OR right are true
console.log(true || false); //true
let x=5
console.log(x < 10 || x > 15) //true