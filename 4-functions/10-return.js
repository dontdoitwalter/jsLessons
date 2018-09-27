// //RETURNS
// function fullName(firstName, lastName){
//     return firstName + ' ' +lastName;
// }
// var fullName = fullName("Walter", "Van \Hooser");
// console.log(fullName);

// function addNums (firstNum, secondNum){
//     return firstNum + secondNum;
// }


// console.log(addNums(2,3));



//             (total bill, percent you want to tip)
function tipCal(billTotal, percentTip){
    //created var that calculates what tip is
    var dollar= billTotal * percentTip;
    //returns total calcualted with tip
    return dollar +billTotal;
}

var totalTotal = tipCal(200 , .20);

console.log(totalTotal);