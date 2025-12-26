

/*
    boolean 
    null
    undefined
    number
    string
    symbol
*/

console.log( 10 == '10' ); //comparação não levando em consideração number e string (tipo).
// 10 é igual a 10 independente se é número ou string.

console.log( 10 === '10'); // comparação levando em consideração number e string (tipo).
// 10 é diferente de '10', número não é igual a string.

// boolean = true and false

console.log(!'')


//String

/* 

"teste" // Pouco utilizado 
'teste' // Mais utilizado
`teste` // Utilizado atualmente pq pode colocar um template ${value}.

*/ 

// Objects - Serve para colocar valores:
// objetos sempre vão ter {}
const x = {
    //métodos:
    name: 'Rafael',
    idade: 30,
}

//atribuição de valores
x.sobrenome = 'Vera Domingues'
x.sexo = 'Masculino'

//Métodos para acessar os valores:
console.log(x)
console.log(x.name)
console.log(x['name'])