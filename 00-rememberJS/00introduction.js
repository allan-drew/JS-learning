// Always use const if the value should not be changed
// Always use const if the type should not be changed (Arrays and Objects)
const algumNumero = 10;
console.log(algumNumero)


//----------------
// The keyword const is a little misleading.
// It defines a constant reference to a value. (It does not define a constant value.)

// You can change the elements of a constant array:
const cars = ["UP", "Polo", "Nivus"];
cars[0] = "Gol";
console.log(cars);

// But.....you can NOT reassign the array:
// cars = ["Pulse", "Argo", "Fastback"]; // TypeError: Assignment to constant variable.


// So... const variable cannot be reassigned:
const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error


// You can change the properties of a constant object:
const carro = {
  marca: "VW", 
  modelo: "Virtus", 
  cor: "branco"
}
carro.cor = "vermelho" // can change a property (even with const)
carro.preco = 99000 // can add a property (even with const)
console.log(carro)

// But you can NOT reassign the object:
// carro = {marca: "Fiat", modelo: "Pulse", cor: "preto"} // ERRO

//----------------


// You declare a JavaScript variable with the var or the let keyword:
let umaDescricao = "essa é uma descrição"; // Use let if you can't use const
var outraDescricao; // Use var if you MUST support old browsers.
outraDescricao = "essa é outra descrição";


//-----
// A variable declared without a value will have the value undefined.
let carName;
console.log(carName)

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let x = 2 + 3 + "5";
console.log(x)


// ------
// If you re-declare a JavaScript variable declared with var, it will NOT LOSE its value.
var greeting = "Olá!"
console.log(greeting) // Olá!
var greeting;
console.log(greeting) // Olá!

// Redeclaring a JavaScript var variable is allowed anywhere in a program:
var cor = "azul"
var cor = "amarelo"
var cor = "preto"
console.log(cor)

// ** You cannot re-declare a variable declared with let or const.
// ----



// If you must reassign references, use let instead of var
// because let is block-scoped
let contador = 1;
if (true) {
  contador += 1;
}
console.log(contador)

// let and const are block-scoped, 
// whereas var is function-scoped.
{
    let a = 1;
    const b = 1;
    var c = 1;
}

// ES6 introduced the two new JavaScript keywords: let and const.
// These two keywords provided Block Scope in JavaScript:
// So.... a and b cannot be used here! 

//console.log(a); // ReferenceError
//console.log(b); // ReferenceError
console.log("imprimindo c: "+ c); // Variables declared with the var always have Global Scope.


// Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
let _lastName = "Johnson";
// let _lastName = "John"; //Variables defined with let can not be redeclared.

// Variables defined with var CAN BE redeclared.
var firstName = "Jon";
console.log(firstName)

var firstName = "Jonas";
console.log(firstName)

// *** Redeclaring a variable using the var keyword can impose problems.


//-----



