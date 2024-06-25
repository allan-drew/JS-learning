// IF...ELSE / SWITCH / FOR / FOR IN / FOR OF / WHILE / BREAK / CONTINUE

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

var i = 5;
let text = "";
for (var i = 0; i < 10; i++) {
  text += "The number is " + i + " / ";
}
console.log(text);

// using var inside for
// the variable declared in the loop >>> redeclares <<< the variable outside the loop.
// So, here i is 10
console.log(i);

//-----
let i2 = 5;
let text2 = "";
for (let i2 = 0; i2 < 10; i2++) {
  text2 += "The number is " + i2 + " / ";
}
console.log(text2);

// using let inside for
// the variable declared in the loop >>> DOES NOT <<< redeclare the variable outside the loop.
// so, here i2 is 5
console.log(i2);

// =================================
// FOR OF
// for of statement loops through the values of an iterable object.

// over an array
const bebidas = ["água", "suco", "refrigerante", "cerveja"];

let textBebidas = "";
for (let x of bebidas) {
    textBebidas += x + " / ";
}
console.log(textBebidas);


// over a string
let idioma = "INGLÊS";

let textIdioma = "";
for (let x of idioma) {
    textIdioma += x + " / ";
}
console.log(textIdioma);


// FOR IN 
// for in statement loops through the properties of an Object
const pessoa = {
    nome:"Thiago", 
    sobrenome:"Pereira", 
    idade:30
};

let textPessoa = "";
for (let x in pessoa){
    textPessoa += pessoa[x] + " / ";
}
console.log(textPessoa);

// over arrays:
const salarios = [3200, 2100, 5600, 7450, 1300];

let textSalarios = "";
for (let x in salarios) { // Warning: Do not use for in over an Array if the index order is important.
    textSalarios += salarios[x] + " / ";
}
console.log(textSalarios);

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

console.log();
console.log();

//------------------------------------------
// The break statement "jumps out" of a loop.
totalLoop = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    totalLoop += i + "...";
}
console.log(totalLoop);


// The continue statement "jumps over" one iteration in the loop.
totalLoop2 = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    totalLoop2 += i + "...";
}
console.log(totalLoop2);

console.log();
console.log();

//------------------------------------------


