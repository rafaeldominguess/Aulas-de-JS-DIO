//Objetos
const pessoa = { //Uso Objeto quando queremos agrupar várias propriedades relacionadas
    nome: 'Rafael',
    idade: 30,
    profissao: 'Desenvolvedor'
};

//Acessando propriedades do objeto
console.log(pessoa.nome); // Rafael
console.log(pessoa['idade']); // 30

function exibirPropriedade(nome, profissao) {
    console.log(`Nome: ${nome}, Profissão: ${profissao}`);
}

exibirPropriedade(pessoa.nome, pessoa.profissao); // Nome: Rafael, Profissão: Desenvolvedor

//Adicionando novas propriedades
pessoa.cidade = 'São Paulo';
console.log(pessoa.cidade); // São Paulo

//Modificando propriedades existentes
pessoa.idade = 31;
console.log(pessoa.idade); // 31

//Removendo propriedades
delete pessoa.profissao;
console.log(pessoa.profissao); // undefined

//Iterando sobre as propriedades do objeto
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
} //Quando não sabemos quantas propriedades o objeto tem ou terá

//Arrays de objetos

const pessoas = [ //Uso lista quando sabemos que teremos vários objetos
    { nome: 'Ana', idade: 25 },
    { nome: 'Bruno', idade: 28 },
    { nome: 'Carla', idade: 22 } //Podemos ter uma lista de objetos
];

pessoas.forEach(p => {
    console.log(`Nome: ${p.nome}, Idade: ${p.idade}`);
}); 

//Adicionando um novo objeto ao array
pessoas.push({ nome: 'Daniel', idade: 35 });
console.log(pessoas);

//Filtrando objetos no array
const maioresDe30 = pessoas.filter(p => p.idade > 30);
console.log(maioresDe30); // [{ nome: 'Daniel', idade: 35 }]

//Mapeando objetos no array
const nomes = pessoas.map(p => p.nome);
console.log(nomes); // ['Ana', 'Bruno', 'Carla', 'Daniel']

//Encontrando um objeto no array
const pessoaBruno = pessoas.find(p => p.nome === 'Bruno');
console.log(pessoaBruno); // { nome: 'Bruno', idade: 28 }

//Modificando um objeto no array
const pessoaAna = pessoas.find(p => p.nome === 'Ana');
if (pessoaAna) {
    pessoaAna.idade = 26;
}
console.log(pessoas);

//Removendo um objeto do array
const indexCarla = pessoas.findIndex(p => p.nome === 'Carla');
if (indexCarla !== -1) {
    pessoas.splice(indexCarla, 1);
}
console.log(pessoas);

//Objetos aninhados
const empresa = {
    nome: 'Tech Solutions',
    endereco: { //Objeto dentro de outro objeto
        rua: 'Av. Paulista',
        numero: 1000,   
        cidade: 'São Paulo'
    },
    funcionarios: [
        { nome: 'Rafael', cargo: 'Desenvolvedor' },
        { nome: 'Ana', cargo: 'Designer' }
    ]
};

console.log(empresa.nome); // Tech Solutions
console.log(empresa.endereco.rua); // Av. Paulista
console.log(empresa.endereco.cidade); // São Paulo
console.log(empresa.funcionarios[0].nome); // Rafael



