// JavaScript functions are defined with the function keyword.

// Function Declarations
function multiplicarDoisNumeros(a, b) {
    return a * b;
}
console.log(multiplicarDoisNumeros(2, 4)) // 8


// Function Expressions (can be stored in a variable)
const variavelDaFuncaoAnonima = function (a, b) {
    return a - b
};
// The function above is actually an anonymous function (a function without a name).

// The variable can be used as a function:
let resultado = variavelDaFuncaoAnonima(45, 10)
console.log(resultado) // 35

// Functions stored in variables do not need function names. 
// They are always invoked (called) using the variable name.
console.log(variavelDaFuncaoAnonima(10, 3)) // 7



// ================================ 
// ARROW FUNCTIONS: 
// Arrow functions allows a short syntax for writing function expressions.
// (DON'T NEED function keyword, return keyword, and the curly brackets.)

// not arrow function:
var minhaFuncao = function (x, y){
    return x * y;
}

// arrow functions: 
// Using const is safer than using var, because a function expression is always constant value.
const minhaArrowFunction = (x, y) => x * y;

// It might be a good habit to always keep return keyword and curly brackets
const minhaSegundaArrowFunction = (x, y) => { return x * y } ;


// BEFORE ARROW FUNCTION:
let ola = "";
ola = function(){ 
    return "Olá Mundo!";
}
console.log(ola());

// WITH ARROW FUNCTION:
let hello = "";
hello = () => { 
    return "Hello World"; 
}
console.log(hello());


// If you have parameters, you pass them inside the parentheses:
let imprimeJogador = "";
imprimeJogador = (nome) => "Hello " + nome; // with no return keyword and curly brackets:
console.log(imprimeJogador("Messi"));



// ================================ 
// ------> JS arguments are passed by value!
// The function only gets to know the values, not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's original value. Arguments are Passed by Value

// but...if a function changes an object property, it changes the original value. 
// ----> Objects are Passed by Reference!
// ================================ 


// When a function is called without an owner object, the value of this becomes the global object.
// If a function is not a method of a JavaScript object, it is a function of the global object!
// In a web browser the global object is the browser window.
function retornarWindow() {
    return this;
}

console.log(retornarWindow())

//-------





