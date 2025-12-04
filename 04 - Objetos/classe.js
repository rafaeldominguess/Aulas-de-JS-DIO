class Pessoa {
    name;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.idade} anos`);
    }
};

const Rafael = new Pessoa();
Rafael.name = 'Rafael Vera Domingues';
Rafael.idade = 26;

const Oscar = new Pessoa();
Oscar.name = 'Oscar Vitor Borba';
Oscar.idade = 30;

console.log(Rafael);
console.log(Oscar);

Rafael.descrever();
Oscar.descrever();