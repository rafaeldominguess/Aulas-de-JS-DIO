let dataClient = { // Objetos
    name: "Rafael",
    age: 26,
    products: {
        0: ["Mouse", 49.90],
        1: ["Teclado", 180.90],
        2: ["Monitor", 899.90],
        3: ["Mousepad", 30.90]
    }
}



function generateDataCliente(dataClient) {
    console.log(`Nome do cliente é ${dataClient.name}, idade ${dataClient.age} anos, os produtos são:`)

    //For in percorre toda a lista da minha variável com objetos.
    for (let i in dataClient.products) {
        let [productName, productPrice] = dataClient.products[i]
        console.log(`${productName}: R$ ${productPrice.toFixed(2)}`)
    }
}

generateDataCliente(dataClient)

//API Rest = transferir dados de um sistema para outro.
//Protocolo de comunicação entre sistemas.


