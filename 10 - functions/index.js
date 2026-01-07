const pessoa = {
    name: 'Rafael',
    age: 26,

}

function gritar(frase) {
    console.log(frase, this.name)
}


console.log(pessoa)
//apply = array
gritar.apply(pessoa, ['Olá'])

//call = string
gritar.call(pessoa, 'Olá')
