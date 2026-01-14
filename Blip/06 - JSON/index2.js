//Pegar dados de um estagiário 

let dataClient = {
    name: "Rafael",
    age: 26,
    height: 1.70,
    stacks: {
        0: ["HTML"],
        1: ["CSS"],
        2: ["JavaScript"]
    }
}

function generateData(dataClient) {
    console.log(`Nome: ${dataClient.name}, idade: ${dataClient.age}, altura: ${dataClient.height.toFixed(2)}`)
    console.log("Tecnologias:")

    for (let i in dataClient.stacks) {
        let [stacksName] = dataClient.stacks[i]
        console.log(`${stacksName}`)
    }

}

generateData(dataClient)


console.log("------------")
//Lista de mercado com nome do produto e valor.

const listaProdutos = [
    ["Banana", 14],
    ["Pão", 11],
    ["Arroz", 15],
    ["Feijão", 17],
    ["Carne", 150],
    ["Queijo", 12],
    ["Refrigerante", 8],
    ["Sorvete", 15],
]

console.log("Lista de produtos do mercado: ")


function getDataProducts(productName, productPrice) {
    return `${productName} R$${productPrice.toFixed(2)}`

}

for (let i = 0; i < listaProdutos.length; i++) {
    const [productName, precoProduct] = listaProdutos[i];
    let resultado = getDataProducts(productName, precoProduct)
    console.log(resultado)
}


const valorFinal = listaProdutos

function calcularPrecoTotal(listaProdutos) {
    let total = 0

    for (let i = 0; i < listaProdutos.length; i++) {
        const [_, preco] = listaProdutos[i];
        total += preco
    }
    console.log("------------")
    console.log (`Preço total: R$${total.toFixed(2)}`)
}

calcularPrecoTotal(valorFinal)

