//For, pegando números pares de um array.

const numeros = [0, 1, 2, 3, 5, 7, 10, 4, 20, 12]


console.log("Os números pares são: ")


for (let i = 0; i < numeros.length; i++) {
    const numerosPares = numeros[i];

    if (numerosPares % 2 === 0) {
       console.log(numerosPares)
    }
}
 