//coleção de chave e valor: (usado para agrupar várias informações)
const Rafael = {
    name: 'Rafael Vera Domingues',
    idade: 26,
    altura: 1.70,
    descrever: function(){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.idade} anos`);
    }
};

//chamando uma função:
Rafael.descrever();

// atribuir valor:
Rafael.profissao = 'Militar';

//-------------------//---------------------//------------------//------------------

//console.log(Rafael.name);
//console.log(Rafael.idade);
//console.log(Rafael.altura);
//console.log(Rafael);