
const { gets, print } = require('./funcoes_auxiliares02');

const numeros = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < numeros; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

print('Maior número par:' + maiorNumeroPar)
print('Menor número impar:' + menorNumeroImpar)
