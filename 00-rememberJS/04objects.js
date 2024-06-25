// In JavaScript, almost "everything" is an object.

// Objects are variables too. But objects can contain many values.
// The values are written as name:value pairs 
// Objects are containers for named values called properties.
const jogador = {
    primeiroNome:"Bruno",
    sobrenome:"Henrique",
    
    // Object Method
    fullName : function() {
        return this.primeiroNome + " " + this.sobrenome;
      }

};

// You can access object properties in two ways:
console.log(jogador.primeiroNome)
console.log(jogador["primeiroNome"])
console.log(jogador.fullName()) // accessing Object Methods

// ---------------
// All JavaScript values, except primitives, are objects.

// A primitive value is a value that has no properties or methods.
// JavaScript defines 7 types of primitive data types:
    // string, number, boolean, null, undefined, symbol, bigint

// Primitive values are immutable. 
// For example: if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.


// Creating a JavaScript Object: 

// 1) Using an Object Literal  
const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

// creating an empty JavaScript object, and then adds 3 properties:
const pessoa = {};
person.nome = "Joao";
person.idade = 30;
person.corDosOlhos = "azul";

// 2) Using the JavaScript Keyword new
const nacao = new Object();
person.nome = "Italia";
person.populacao = 59_000_000;
// (For readability, simplicity and execution speed, use the object literal method)

//----------

// The object pais is not a copy of nacao. It IS nacao. 
const pais = nacao // Both pais and nacao are the same object.
pais.populacao = 60_000_000; // Will change both

console.log(nacao.populacao)
console.log(pais.populacao)


// ------
// Nested Objects
const aluno = {
    nome: "mariazinha",

    cursos: {
        curso1: "Engenharia Mecanica",
        curso2: "Tecnologia da Informação"
    }
}

console.log(aluno.cursos.curso1)
console.log(aluno.cursos.curso2)
console.log()



// ===============================================
// Some common solutions to display JavaScript objects are:
    // Displaying the Object Properties by name
    // Displaying the Object Properties in a Loop
    // Displaying the Object using Object.values()
    // Displaying the Object using JSON.stringify()

// LOOP: 
const funcionario = {
    name: "John",
    age: 30,       
    city: "New York"
};
      
let txt = "";

for (let x in funcionario) {
    txt += funcionario[x] + " ";
};

console.log(txt)


// Using Object.values(): 
const funcionarioArray = Object.values(funcionario);
console.log(funcionarioArray)


// Using JSON.stringify(): 
// stringify --> convert to a string
let funcionarioString = JSON.stringify(funcionario);
console.log(funcionarioString) // string following the JSON notation! 


console.log()

// ======================================================

// JavaScript Accessors (Getters and Setters)

const gerente = {
    salario: 12500,

    // GET
    get sal() {
      return this.salario;
    },

    // SET
    anosExperiencia: undefined,

    set exp(anosExp) {
        this.anosExperiencia = anosExp;
    }

};

console.log("Salário do gerente => " + gerente.sal)


// SET 
gerente.exp = 5;
console.log("Anos de xp do gerente => " + gerente.anosExperiencia)


console.log()
console.log()


// =========
// JS Object Constructors

// Sometimes we need a "blueprint" for creating many objects of the same "type".
// function Cliente is an example of object constructor function! 
function Cliente (nome, sobrenome, idade, renda) {
    this.nomeCliente = nome;
    this.sobrenomeCliente = sobrenome;
    this.idadeCliente = idade;
    this.renda = renda;
    this.tempoFidelidade = 0; // property with default value

    //constructor can also define methods:
    this.nomeCompleto = function () {
        return this.nomeCliente + " " + this.sobrenomeCliente;
    }

}

// Creating objects of the same type:
const cliente01 = new Cliente("Jaozin", "da Silva", 20, 3000.00);
const cliente02 = new Cliente("Mariazinha", "Souza", 24, 4250.00);

// console.log("CLIENTE01 ==> " + Object.values(cliente01));
// console.log("CLIENTE02 ==> " + Object.values(cliente02));

// It's possible to add a Property to an OBJECT
cliente01.tipoAtendimento = "EXCLUSIVO"
// console.log("CLIENTE01 ==> " + Object.values(cliente01));

// Sometimes you want to add new properties (or methods) to an CONSTRUCTOR.
Cliente.prototype.nacionalidade = "brasileira"
// In this case, you use prototype property (Cliente object inherit from Object.prototype)
// All JavaScript objects inherit properties and methods from a prototype.



console.log(cliente01.nomeCliente)
console.log(cliente01.sobrenomeCliente)
console.log(cliente01.idadeCliente)
console.log(cliente01.renda)
console.log(cliente01.tempoFidelidade)
console.log(cliente01.tipoAtendimento)
console.log(cliente01.nomeCompleto())
console.log(cliente01.nacionalidade)
console.log()


// =================
// JavaScript has built-in constructors for native objects:
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
console.log()

// ....But there is no reason to create complex objects....
    // Use string literals "" instead of new String().
    // Use number literals 50 instead of new Number().
    // Use object literals {} instead of new Object().
    // Etc...


//==============================
// Iterable objects are objects that can be iterated over with for..of.

// Iterating Over a String
let palavra = ""
for (const x of "W3Schools") {
    palavra+= x + " ";
}
console.log(palavra)

// Iterating Over an Array
let arrayGerada = []
for (const x of [1,2,3,4,5]) {
    arrayGerada.push(x)
}
console.log(arrayGerada)
console.log()


// ==================================================================================================================
// ------- OBJECT SETS -------
// A JavaScript Set is a collection of unique values.
// A Set can hold any value of any data type.
const numerosSorteados = new Set([10, 23, 44, 9]);
console.log(numerosSorteados)

const letras = new Set(["a", "y", "s", "z", "r", "k"])
// forEach() method
let texto = []
letras.forEach(function(x) {
    texto+=x;
})
console.log(texto)
console.log(letras.values()) // Returns [object Set Iterator]

// Sets are Objects
console.log(typeof(letras)) // returns object
console.log(letras instanceof Set) // true
console.log(letras instanceof Map) // false
console.log()


// ==================================================================================================================
// ------- OBJECT MAPS -------
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
const carros = new Map([
    ["VW Polo", 90_000],
    ["Peugeot 208", 74_000],
    ["Fiat Argo", 81_000],
]);

// add elements to a Map with the set() method:
carros.set("Citroen C3", 72_000);
carros.set("VW Polo TRACK", 84_000);
console.log(carros)

// changing existing Map VALUES with set
carros.set("Citroen C3", 73_000);
carros.set("VW Polo", 89_000);
console.log(carros)

// The get() method gets the value of a key in a Map:
console.log("Preço do Polo Track = " + carros.get("VW Polo TRACK"));

// size
console.log("Número de carros disponíveis = " + carros.size)

// The delete() method removes a Map element

// The clear() method removes all the elements from a Map

// The has() method returns true if a key exists in a Map
console.log("Tem Polo TRACK disponivel?   " + carros.has("VW Polo TRACK")); //returns true


// Maps are Objects
console.log(typeof carros); //returns object
console.log(carros instanceof Map); //returns true
console.log(carros instanceof Set); //returns false

// forEach
// invokes a callback for each key/value pair in a Map:
let listaCarros = "";
carros.forEach (function(value, key) {
  listaCarros += key + '=' + value + " / ";
})
console.log(listaCarros)

// The keys() method returns an iterator object with the keys in a Map:
let chaves = "";
for (const x of carros.keys()) {
  chaves += x + ' / ';
}
console.log(chaves)

// The values() method returns an iterator object with the values in a Map:
let valores = "";
for (const x of carros.values()) {
  valores += x + ' / ';
}
console.log(valores)



