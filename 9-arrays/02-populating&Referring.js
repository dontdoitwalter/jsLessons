/*
INTRO TO ARRAYS

Have [] brackets
can hold multiple data types
great for listing
*/

//overiew/calling
let students = ['Tony', 'Marshall','Rhys','Ray',23,true, ['Ryan','Iesha']];
//index numbers:  0         1         2     3   4   5          6
console.log(typeof students); //object
console.log(students[2]); //Rhys

console.log(`Hello  ${students[6][1]}, you look nice today.`)

console.log('Hello ' + students[6][1] + ', you look nice today');

let food = ['pecan pie', 'shrimp','quesadilla','cheese cake','hot dog'];

for (let f of food){
    console.log(f);
}

food.push('Pizza') //appends pizza to the end of the array
console.log(food);
food.splice(1, 1, 'Bananas'); // first num: the index to start at, second num: number of things to remove, third num: replacement value
console.log(food);

food.splice(2,0, 'Sweet Potato Pie');
console.log(food);

food.pop(); //removes last value