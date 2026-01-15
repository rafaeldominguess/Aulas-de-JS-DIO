class DadosUsuário { // Classe sempre inicia com maúscula,  diferente das variáveis que leva padrão camelCase
    constructor(name, birthDate, email) {
        this.name = name
        this.birthDate = birthDate
        this.email = email
    }

    getData() {
        console.log(`Olá ${this.name}, sua data de nascimento é: ${this.birthDate}, seu email é: ${this.email}`)

    }
}
                                            // formato MM-DD-YYYY internacional 
const rafael = new DadosUsuário("Rafael", "10/19/1999", "rafael-esa@hotmail.com");
const gustavo = new DadosUsuário("Gustavo", "12/20/1999", "gustavo-esa@hotmail.com");
const renan = new DadosUsuário("Renan", "06/19/1999", "renan-esa@hotmail.com");
const oscar = new DadosUsuário("oscar", "02/14/1999", "oscar-esa@hotmail.com");

rafael.getData() //retorna a função apenas.
gustavo.getData()
renan.getData()
oscar.getData()
//ou

console.log(rafael)  // retorna todos os dados do usuário em JSON
console.log(gustavo)
console.log(renan)
console.log(oscar)