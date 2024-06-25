
// JavaScript has 8 Datatypes
    // 1. string
    // 2. number
    // 3. bigint
    // 4. boolean
    // 5. undefined
    // 6. null
    // 7. symbol
    // 8. object

    // A JavaScript variable can hold any type of data.

//----------------------------------------------------------------------------------------------------------------
// Strings:
let cor = "amarelo";
console.log(typeof(cor)) // type --> string
console.log("The length is ====>" + cor.length)
console.log(cor.toUpperCase())
console.log(cor.toLowerCase())

let char = cor.charAt(0)
console.log(char) // returns a

let char2 = cor.charAt(1)
console.log(char2) // returns m

// charCodeAt() --> returns a UTF-16 code (an integer between 0 and 65535).
let char3 = cor.charCodeAt(2)
console.log(char3) // returns 97
console.log()

// slice() extracts a part of a string and returns the extracted part
let timeCampeao = "FLAMENGO"
let part = timeCampeao.slice(3, 8) // slice(start, end)
console.log(part)

// substring() is similar to slice().
// but...start and end values less than 0 are treated as 0
let texto = "Ordem e Progresso";
let parteDoTexto = texto.slice(-12); // the position is counted from the end
console.log(parteDoTexto)

let parteDoTexto2 = texto.substring(-12, 5); // -12 treated as 0 // substring(start, end)
console.log(parteDoTexto2)


// A string can be converted to an array with the split() method:
// split
const arraySplitted = texto.split(" ") // splitting using space
console.log(arraySplitted)

// to return array of single characteres, use ""
let nomePais = "ARGENTINA"
const arrayNomePais = nomePais.split("")
console.log(arrayNomePais)

// indexof returns the index (position) of the first OCCURENCE, OR -1 if is not found!
console.log(nomePais.indexOf("G")) // returns 2


// The includes() method returns true if a string contains a specified value.
let nomeJogador = "CRISTIANO RONALDO"
console.log(nomeJogador.includes("RONALDO")) //return true
console.log(nomeJogador.includes("RONALDO", 50)) //returns false (do NOT starts at position 50)
console.log(nomeJogador.includes("RONALDO", 10)) //returns true (RONALDO starts at position 10)


// String Templates / Template Strings / Template Literals
// use back-ticks (``) rather than the quotes ("")
// Template String provide an easy way to interpolate variables and expressions into strings.
let primeiro = "REAL MADRID";
let segundo = "BARCELONA";
let times = `PÓDIO com ${primeiro} e ${segundo}`;
console.log(times)


// HTML Templates
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html)


// All string methods return a new string. They don't modify the original string.
// Strings cannot be changed, only replaced.
console.log()
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
// Numbers:
// JavaScript DOES NOT define different types of numbers, like integers, short, long, floating-point etc.
// JavaScript Numbers are Always 64-bit Floating Point
let altura = 20;
console.log(typeof(altura)) // type --> number

let largura = 10.5;
console.log(typeof(largura)) // type --> number

// be careful
let total = 0.2 + 0.1;
console.log(total) // 0.30000000000000004


// NaN (Not a Number) is a JavaScript reserved word indicating that a number is not a legal number.
let result = 10 / "laranja";
console.log(result) // NaN

//but....if the string is numeric, JS will try to convert to number 
let result2 = 50 / "10";
console.log(result2) // 5


// Infinity (or -Infinity)
let calculate = 5 / 0;
console.log(calculate) // Infinity

let calculate2 = - 5 / 0;
console.log(calculate2) // -Infinity

console.log()
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
// Booleans
let x = true;
let y = false;
console.log(typeof(x)) // type --> boolean
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
// 


//----------------------------------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------------------------------
// Object:
// JavaScript objects are written with curly braces {}.
const jogador = {
    primeiroNome:"Bruno", 
    sobrenome:"Henrique"
};
console.log(typeof(jogador)) // type --> object

// Array object:
// written with square brackets.
const marcas = ["VW", "Fiat", "Toyota"];
console.log(typeof(marcas)) // type --> object

// Date object:
const date = new Date("2024-01-01"); 
console.log(date)
console.log(typeof(date)) // type --> object
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
// JavaScript has dynamic types. 
// This means that the same variable can be used to hold different data types:
let variavelX;       // Now variavelX is undefined
variavelX = 5;       // Now variavelX is a number
variavelX = "Gabi";  // Now variavelX is a string

// Strings are written with quotes. You can use single or double quotes:
variavelX = "Gabigol"; // double quotes
console.log(typeof(variavelX)) // type --> string

variavelX = 'Gabriel'; // single quotes
console.log(typeof(variavelX)) // type --> string

// Javascript numbers are always one type:
    // double (64-bit floating point).
// but...
// JavaScript BigInt is a new datatype (ES2020) 
// that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let numero = BigInt("123456789012345678901234567890");
console.log(typeof(numero)) // type --> bigint
//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------
// Undefined: a variable without a value
let media
console.log(media)
//----------------------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------------------
// *** An empty string has a value and a type!!!
let nomeTime = "" // The value is "", the typeof is "string"
console.log("o nome do time é --> " + nomeTime)
console.log("the typeof is " + typeof(nomeTime)) // type --> string

console.log()
console.log()
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
// JavaScript Arrays
const notas = [10, 1, 3, 9]
console.log(notas)

// You can also create an array, and then provide the elements:
const brands = [];
brands[0] = "VW"
brands[1] = "FIAT"
brands[2] = "PEUGEOT"
console.log(brands)

brands[0] = "VOLKSWAGEN" //changing an array element
console.log(brands)

// ARRAY METHODS:

// length
let sizeBrands = brands.length;
console.log(sizeBrands);

// convert array to string
let brandsString = brands.toString();
console.log(brandsString)

// join array elements into a string
let brandsJoined = brands.join(" /// ")
console.log(brandsJoined);

// Arrays are Objects. But, JavaScript arrays are best described as arrays, 
// because ARRAYS use numbers to access its elements(ex.: person[0])...
// and OBJECTS use names to access its members (ex.:person.firstName)
// Keep in mind that JS operator typeof returns object
console.log(typeof brands) // returns object because JS array is an object

// to solve this:
console.log(Array.isArray(brands)) // true


// Arrays are a special kind of objects, with numbered indexes.
    // arrays use numbered indexes.  
        // You should use arrays when you want the element names to be numbers.
    // objects use named indexes.
        // You should use objects when you want the element names to be strings (text).

// adding array elements (at the end):
brands.push("CITROEN")
brands.push("MERCEDES")
brands.push("BMW")
brands.push("AUDI")
brands.push("CHEVROLET")

console.log(" After push() some brands ===> "+ brands)

// and push returns the length of the new array
let newLength = brands.push("PORSCHE")
console.log(" the new length of the array is : " + newLength);
console.log(" After push() another brand ===> "+ brands);


// pop() removes the last element
brands.pop();
brands.pop();
brands.pop();
console.log(" After pop() some brands ===> "+ brands);

// and pop() returns the value that was popped out
let brandPoppedOut = brands.pop()
console.log(brandPoppedOut);

console.log(" After pop() a brand again ===> "+ brands);


// The shift() method removes the first array element
console.log(" [0] element BEFORE shift() => "+ brands[0]);
console.log("          " + brands);

brands.shift()

// and "shifts" all other elements to a lower index.
// for example, now, the [0] element is the [1] before shift()
console.log(" [0] element AFTER shift() => "+ brands[0]);
console.log("          " + brands);


// The unshift() method adds a new element to an array (at the beginning)
brands.unshift("BYD")
console.log(" [0] element AFTER unshift() => "+ brands[0]);
console.log("          " + brands);
console.log();


// Merging Arrays
// concat()
const alunosTurma1 = ["Ana", "Maria", "Tiago"]
const alunosTurma2 = ["Lohan", "Thiago"]
const alunosTurma3 = ["Lukas", "Amanda"]
const allAlunos = alunosTurma1.concat(alunosTurma2, alunosTurma3) // concat() returns a new array (and DOES NOT change the existing arrays).
console.log(allAlunos);


// sorting an array
allAlunos.sort(); // sort() alters the original array
console.log(allAlunos);
console.log();


// ARRAY ITERATION:

// The map() method of Array instances creates a new array populated with the results of calling a provided function 
// on every element in the calling array.
const array1 = [1, 4, 9, 16];
const map1 = array1.map( (x) => x * 2 ); // Pass a function to map. Callback é uma função que será executada para cada elemento!
console.log(map1);


const notas2023 = [5, 10, 8, 2, 0, 6, 1, 3];
function mapearNotas(nota) {
    return nota + 2;
}
const mapNotas = notas2023.map(mapearNotas)
console.log(mapNotas);


// filter() method creates a new array that pass a test.
const notasMaioresQueCinco = notas2023.filter(x => x > 5);
console.log(notasMaioresQueCinco);


// The reduce() method runs a function on each array element 
// to reduce it to a single value.
let somaDasNotas = notas2023.reduce(somarNotas)

function somarNotas(total, value) {
  return total + value;
}
console.log(somaDasNotas);



console.log()
//----------------------------------------------------------------------------------------------------------------





