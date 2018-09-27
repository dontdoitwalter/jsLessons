/*
FOR OF LOOPS

BETTER FOR ARRAYS
*/

// let student = {name: 'emily', awesome: true, degree: 'JavaScript', week: 1};
// for(let key of student) {
//     console.log.toString(key);
// }

let catArray = ['tabby','british shorthair','burmser','maine coon'];

for(cat of catArray){
    console.log(cat, 'says meow');
}

for(cat in catArray){
    console.log(cat, 'says meow');
}