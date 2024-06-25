
// JavaScript Comparison Operators

// Operator	Description
// ==	    equal to
// ===	    equal value and equal type
// !=	    not equal
// !==	    not equal value or not equal type
// >	    greater than
// <	    less than
// >=	    greater than or equal to
// <=	    less than or equal to
// ?	    ternary operator

const nota1 = 9 // type number
var nota2 = "9" // type string

console.log(nota1 == nota2) // true (equal)
console.log(nota1 === nota2) // false (equal value but not equal type)

console.log(typeof(nota1)) // returns number
console.log(typeof(nota2)) // returns string


let x = 10;
console.log(10 == 10); // == -> equal to....returns true
console.log(10 === 10); // == -> equal value and equal type....returns true
console.log(10 == "10"); // == -> equal to....returns true
console.log(10 === "10"); // == -> equal value and not equal type....returns false

//----

let myAge = 23;
let canPass = (myAge < 18) ? "Too young" : "Ok, go ahead!";
console.log(canPass);


// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const smartphone = {sistema:"Android", modelo:"S10", cor:"preto"};
console.log(smartphone?.marca); // returns undefined




// Bitwise Operators
// &	AND
// |	OR
// ~	NOT
// ^	XOR