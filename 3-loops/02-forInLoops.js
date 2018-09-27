/*
FOR IN LOOPS

Great for iterating over values in an object
*/

let student = {name: 'Walter', awesome: true, degree:'JavaScript', week: 1};

console.log(student.name);

for (let item in student) {
    console.log(item);
    console.log(student[item])
}

let catArray = ['tabby','british shorthair','burmser','maine coon'];

for (cat in catArray){
    console.log(cat);
}

let studentName = [''];
for (name in studentName){
    name.charAt(0).toUpperCase();{
        console.log('steven')
    }
}

let studentName='paul';
let capName = '';

for (let ch in studentName){
    if(ch==0) {
        capName = studentName[ch].toUpperCase();
    } else {
        capName = capName + studentName[ch].toLowerCase();
    }
    console.log(capName);
}
console.log(capName);

