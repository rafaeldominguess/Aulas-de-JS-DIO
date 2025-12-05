/* 
        1- Crie uma classe para representar carros.
        a) Os carrros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
        b) Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor gasto em reais para realizar esse percuso.
*/

class Carro {
    marca;
    cor;
    autonomia;

    constructor(marca, cor, autonomia) {
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;
    }

    valorGasto(distancia, autonomia, precoCombustivel) {
        const valorGasto = (distancia / autonomia) * precoCombustivel;
        return valorGasto.toFixed(2)
    }
}

const ford = new Carro('fusion', 'prata', 12);
const palio = new Carro('fiat', 'preto',  10 );

console.log(ford, `Valor Gasto na Viagem: ${ford.valorGasto(100,12,5.50)}`);
console.log(palio, `Valor Gasto na Viagem: ${palio.valorGasto(100,10,5.50)}`);

