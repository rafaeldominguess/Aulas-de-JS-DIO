function escrevaMeuNome(name){
    return 'Meu nome é ' + name;
}
   
function verificadorDeIdade(idade) {
    if (idade >= 18) {
        return 'maior de idade';
    } else {
        return 'menor de idade'
    }
}

console.log (escrevaMeuNome('Rafael Domingues ') + 'e eu sou ' + verificadorDeIdade(17));