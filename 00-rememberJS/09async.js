
// JavaScript Callbacks

// A callback is a function passed as an argument to another function.
function imprimeSaldo(saldo) {
    console.log("O saldo agora é => " + saldo);
}

function operacaoCompra(saldoAntes, valorCompra, funcaoCallback) {
    let operacao = saldoAntes - valorCompra;
    funcaoCallback(operacao);
}

operacaoCompra(2300, 400, imprimeSaldo); // imprimeSaldo is a callback function! ** Do not use parenthesis **
// funcaoCallback needs the value after operacao, an then this value will be passed to imprimeSaldo as a saldo


// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function!
// In the real world, callbacks are most often used with asynchronous functions.
//---------------------------------------------------------------------------------------------------

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

// The trouble with long-running SYNCHRONOUS functions
    // Because the program consists of a single thread, 
    // it can only do one thing at a time: 
    // so if it is waiting for our long-running synchronous call to return, it can't do anything else.

// Asynchronous code allows other operations to continue while waiting for time-consuming tasks to complete.
// In a browser environment, for example, asynchronous code allows for parallel execution of tasks, making web pages more responsive.
// ex.: you might want to fetch data from a server without freezing the entire application.


// Asynchronous JavaScript
// Functions running in parallel with other functions are called asynchronous

// Specifying a callback function to be executed on time-out
// function fecharSessao(){ 
//     console.log("Sessão fechada após timeout!!");
// }

// // A typical example is JavaScript setTimeout().
// setTimeout(fecharSessao, 2000);


// you can specify a callback function to be executed for each interval using JS setInterval()...
// Specifying a callback function to be executed for each interval
function horaAgora() {
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
// horaAgora()
setInterval(horaAgora, 1000);


// With asynchronous programming, JS can continue running other tasks in paralell.

// The problema is, Asynchronous program is difficult to write and read. 
// So, in JS asynchronous is solved using Promises. 







