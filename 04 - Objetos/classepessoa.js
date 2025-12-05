/* 
        1- Crie uma classe para representar pessoas.
        a) Para cada pessoa teremos os atributos nome, peso e altura.
        b)As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC  = peso  / (altura * altura)).
        c) Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() { /* Usei os parenteses pra poder usar o .toFixed  */
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

}


const oscar = new Pessoas('Oscar',70, 1.75);
const rafael = new Pessoas('Rafael',78, 1.70);


console.log(oscar, `Meu IMC é: ${oscar.calcularIMC()}` );
console.log(rafael, `Meu IMC é: ${rafael.calcularIMC()}` );
