/* 
        1- Crie uma classe para representar carros.
        a) Os carrros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
        b) Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor gasto em reais para realizar esse percuso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    valorGasto(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKM * precoCombustivel;
    }
}

const ford = new Carro('fusion', 'prata', 1 / 12);
const palio = new Carro('fiat', 'preto', 1/10 )

console.log(ford.valorGasto(100,5.50));
console.log(palio.valorGasto(100,5.50))
