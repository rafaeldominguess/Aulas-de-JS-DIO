/* 1- Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

// Entrada 
const combustivel = 6.10;
const gastoMedioKM = 10;
const distanciaKM = 487;

//Calculo
const litrosConsumidos = distanciaKM / gastoMedioKM;
const valorGasto = combustivel * litrosConsumidos;

//Resultado
console.log('Valor gasto para essa viagem: R$',valorGasto);

