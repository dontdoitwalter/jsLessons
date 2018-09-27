/*
IF ELSE
*/

weather = 75;

if(weather>70){
    console.log('Wear a jacket!');
} else{
    console.log('No jacket necessary!');
}


let name = 'Walter';

if(name !== 'Walter'){
    console.log('Hello, what is your name?');
} else {
    console.log('Hello, my name is Walter');
}

let name = 'tYlEr'

if(name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

let age = 27

if(age < 18){
    console.log('Sorry, you are too young to do anything.');
} else if (age >= 18 && age <21){
    console.log('Yay! You can vote!');
} else if (age >=21 && age < 25){
    console.log('Yay! You can vote!', ' Yay! You can drink!');
} else {
    console.log('Yay! You can rent a car!');
}

let age = 32;

if (age >= 25){
    console.log('Yay! You can rent a car.');
} else if (age >= 21) {
    console.log('Yay! You can drink!');
} else if (age >= 18) {
    console.log('yay, you can vote!')
} else {
    console.log('sorry, too young')
}