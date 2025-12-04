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

const Rafael = new Pessoa('Rafael', 25);
const Oscar = new Pessoa('Oscar', 30);

console.log(Rafael);
console.log(Oscar);


