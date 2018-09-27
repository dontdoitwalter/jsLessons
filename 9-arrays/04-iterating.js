//ITERATING
let food = ['pecan pie', 'shrimp','quesadilla','cheese cake','hot dog'];

// food.forEach(f => {console.log(f)})
food.forEach((food,number) =>{
    console.log(food);
    console.log(number);
})

let movie = ['Spaceballs', 'Pulp Fiction', 'The Big Lebowski', 'The Replacements', 'Anchorman'];

movie.forEach((movie) => {
    console.log(movie);
})

movie.push("Inside Out");

movie.splice(5, 5, 'Moana');

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length)

let newArray = new Array(73)
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})
console.log(newArray);