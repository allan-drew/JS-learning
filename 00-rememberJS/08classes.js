// A JavaScript class is >>> NOT <<<  an object.
// JavaScript Classes are templates for JavaScript Objects. 
class Transporte {
    constructor(marca, modelo, ano){ // If you do not define a constructor method, JavaScript will add an empty constructor method.
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    idadeDoTransporte() {
        const data = new Date();
        return data.getFullYear() - this.ano;
      }
}

const transporte001 = new Transporte("Mercedes", "Actros", 2019);
console.log("A idade do meio de transporte é : " + transporte001.idadeDoTransporte() + " anos");



// INHERITANCE: 
class Carro extends Transporte {
    constructor (marca, modelo, ano, pot){
        super(marca, modelo, ano); // Call the constructor of the parent class
        this.potencia = pot;
    }

    mostrar() {
        return "Marca: " + this.marca + 
        " / Modelo: " + this.modelo + 
        " / Ano: " + this.ano + 
        " / Potência: " + this.potencia;
    }

}
 
const carro001 = new Carro("Volks", "Polo", 2018, 109);
console.log(carro001.mostrar());