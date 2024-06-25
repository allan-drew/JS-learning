// TypeScript tries to automatically infer the types 
var a = 10; // TypeScript inferindo o tipo number para a variável
//a = "olá"; // Type 'string' is not assignable to type 'number'
// Explicitly specifying the type
var b = 12; // sem inferir
// -------------- 
// Typescript is about TYPES...
// Some of the ways that TypeScript models types are quite different from Java or C#!  
// TypeScript uses the same runtime as JavaScript!
// In JAVA, the class is the basic unit of code organization...
// In JAVASCRIPT, functions can live anywhere. Data can be passed whithout being inside a 
// pre-defined class/struct...
// TypeScript’s understanding of a type is actually quite different from C# or Java’s.
// The goal of TypeScript is to be a static typechecker for JavaScript programs
// -------------------------------------------
// We don’t always have to write explicit type annotations. 
// In many cases, TypeScript can just infer the types for us even if we omit them.
var agradecimento = "Muito obrigado!"; // Typescript knows that agradecimento is a type string
// telling TypeScript that jogador is string and date should be a Date object
function boasVindas(jogador, date) {
    console.log("Bem-Vindo ao Fla, ".concat(jogador, "! Hoje \u00E9 ").concat(date.toDateString(), "!"));
}
boasVindas("Tite", new Date());
// Type annotations aren’t part of JavaScript...
// So, if we take a look in the outuput JavaScript...we will notice that 
// most TypeScript-specific code gets erased away...
// ...and our type annotations were completely erased.
// By default TypeScript targets ES3 (old ECMAScript). It's possible to change to a more recent with target
//------------------------------------------------------------------------
