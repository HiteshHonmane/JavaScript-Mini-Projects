// Calculator:
// Implement a basic calculator that performs addition, subtraction, multiplication, and division. Use functions for each operation, and include error handling using if-else statements to handle division by zero or invalid operations.


let a = parseInt(prompt("Enter 1st value"))
let b = prompt("Enter Operation ")
let c = parseInt(prompt("Enter 2nd number"))



function sum(a, c) {
    console.log(a + c)
}

function minus(a, c) {
    console.log(a - c)
}
function divide(a, c) {

    //Handling Exceptional error by adding if else

    if (a == 0 || c == 0) {
        console.log('Can not divide by Zero')
    }
    else {
        console.log(a / c)
    }


}

function multiplication(a, c) {
    console.log(a * c)

}


// if (b === '+') {
//     sum(a, c);
// }
// else if (b === '-') {
//     minus(a, c)
// }
// else if (b === '/') {
//     divide(a, c)

// }
// else if (b === '*') {
//     multiplication(a, c)
// }


//We can also Use Switch Case for more simplification

switch (b) {
    case '+':
        sum(a, c);
        break;

    case '-':
        minus(a, c);
        break;

    case '/':
        divide(a, c);
        break;
    case '*':
        multiplication(a, c);
        break;

    default:
        console.log("invalid Operator");
        break;
}

