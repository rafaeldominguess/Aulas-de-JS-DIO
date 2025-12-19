// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [4,2,9,24,57,6,72,81,93,10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
     
    if (numero % 2 === 0) {
        console.log(numero)
    }
}