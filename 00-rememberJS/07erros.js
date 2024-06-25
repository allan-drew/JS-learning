// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.

let x = 4;

try {
    // x = Number(x);
    if(x > 10) throw "too high";
    if(x < 5) throw "too LOW";
    if(isNaN(x)) throw "not a number!!"
} catch(erro) {
    console.log("[ERRO] Número => " + erro);
} finally {
    console.log("-- js erros --");
}


// JavaScript has a built in error object that provides error information when an error occurs.

    // EvalError	An error has occurred in the eval() function
    // RangeError	A number "out of range" has occurred
    // ReferenceError	An illegal reference has occurred
    // SyntaxError	A syntax error has occurred
    // TypeError	A type error has occurred
    // URIError	An error in encodeURI() has occurred