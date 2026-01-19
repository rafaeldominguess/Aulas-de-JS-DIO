const pessoa = {
    nome: 'Rafael',
    idade: 26,
    endereco: [
        { rua: 'Rua A', numero: 1000, estado: 'SP' },
        { rua: 'Rua B', numero: 2000, estado: 'RJ' }
    ]
}

function mostrarEndereco(enderecos) {
    enderecos.forEach((endereco, i) => {
        console.log(`Endereço: ${i + 1} Rua: ${endereco.rua}, Número: ${endereco.numero}, Estado: ${endereco.estado}`);
    })
}
mostrarEndereco(pessoa.endereco);

const person = {
    infos: [
        { nome: 'Rafael', idade: 26 },
        { nome: 'Ana', idade: 24 },
    ]
}

// Função para exibir as informações das pessoas
function getPersonInfo(informacoes) { // informacoes = person.infos
    informacoes.forEach((infos, i) => {
        console.log(`Info: ${i + 1} - Nome: ${infos.nome}, Idade: ${infos.idade}`);
    })
}

getPersonInfo(person.infos); // Chama a função passando o array de informações