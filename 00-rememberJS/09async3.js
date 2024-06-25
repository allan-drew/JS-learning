// ASYNC / AWAIT 

// The async/await syntax simplifies working with Promises: 
// async and await make promises easier to write


// salvando uma promise numa variável
let myPromise = new Promise(function(resolveFunc, rejectFunc){

    setTimeout( () => {

        let reqStatus = 400;

        if(reqStatus == 200) {
            resolveFunc("Relatório OK! "); // resolvendo a promise com sucesso
        } 
        else {
            rejectFunc("Erro ao obter relatório! "); // rejeitando a promise com erro
        }

    }, 1000);

});

// **** Embora o exemplo seja uma promise de relatório, poderia ser também usando o fetch(),
// que é uma promise do JavaScript, para fazer o fetch de informações de alguma API!

    // The global fetch() method starts the process of fetching a resource from the network, 
    // returning a promise that is fulfilled once the response is available.


console.log("Waiting...");


// async makes function Asynchronous and return a Promisse
async function requisitandoRelatorio() {

    try {
        // await keyword is used inside the async function to wait for the asynchronous operation.
        // The use of await pauses the async function until the promise returns a result (resolve or reject) value. 
        let resultado = await myPromise; // waits for the myPromise to complete
        console.log(resultado);
    } catch (e) {
        console.log(e);
    }

}

// calling the async function
requisitandoRelatorio();




