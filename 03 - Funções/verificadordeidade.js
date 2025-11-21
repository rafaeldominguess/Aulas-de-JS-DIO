
function verificadorDeIdade(idade) {
    if (idade >= 18) {
        return 'maior de idade';
    } else {
        return 'menor de idade'
    }
}

console.log ('Você é ' + verificadorDeIdade(17));