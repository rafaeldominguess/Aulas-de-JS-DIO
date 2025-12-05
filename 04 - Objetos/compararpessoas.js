class Pessoa {
    name;
    idade;
    anoDeNascimento;


    constructor(nome,idade){
        this.name = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.idade} anos`);
    }
};

function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.name} é mais velha que ${p2.name}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.name} é mais  velha que ${p1.name} `);
    } else {
        console.log(`${p1.name} e ${p2.name} tem a mesma idade`);
    }

}

const rafael = new Pessoa('Rafael', 25);
const oscar = new Pessoa('Oscar', 30);

compararPessoas(rafael,oscar);