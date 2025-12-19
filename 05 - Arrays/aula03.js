const notas = [];

notas.push(5);
notas.push(8);
notas.push(9);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}


const media = soma / notas.length;
console.log('Minhas notas são: ' + notas);
console.log('A Média é: ' + media.toFixed(1));