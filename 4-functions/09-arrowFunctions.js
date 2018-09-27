//ARROW FUNCTIONS
function coffee(){
    console.log("coffee rules.")
}

let tea = () => {
    console.log("tea is awesome.")
}

coffee();

tea();

var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cats, and ${puppy} dogs.`);
}
//not hoistable
cats(2, 3);

//Arrow Function Body Styles
//Concise
let apples = x => console.log(`There are ${x} apples`)
apples(5);

//Block
let peaches = (x) => {console.log(`There are ${x} peaches.`)}
peaches(6);
