//---------------------------------------------------------------------------------------------------
// JavaScript Promises

// salvando uma promise numa variável
let myPromise = new Promise(function(resolveFunc, rejectFunc){

    setTimeout( () => {

        let reqStatus = 200;

        if(reqStatus == 200) {
            resolveFunc("HTTP 200 OK! Arquivo carregado! "); // resolvendo a promise com sucesso
        } else {
            rejectFunc("ERRO!!!! Arquivo não encontrado! "); // rejeitando a promise com erro
        }

    }, 1000);

});


// A JavaScript Promise object can be:
//     state promise: Pending (Working) --> result is undefined
//     state promise: Fulfilled --> result is a value
//     state promise: Rejected --> result is an error object

console.log("Waiting 1 second...");

// usando a Promise com o then
myPromise.then(  
    // @param onfulfilled — The callback to execute when the Promise is resolved.
    resolvidoSucesso => {
        console.log("Promise resolved! => " + resolvidoSucesso);
    }, 
    
    // @param onrejected — The callback to execute when the Promise is rejected.
    rejeitado => {
        console.log("Promise rejected! => " + rejeitado);
    }
)

