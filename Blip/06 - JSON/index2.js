let dataClient = {
    name: "Rafael",
    age: 26,
    height: 1.70,
    stacks: {
        0: ["HTML"],
        1: ["CSS"],
        2: ["JS"]
    }
}

function generateData(dataClient) {
    console.log(`Nome: ${dataClient.name}, idade: ${dataClient.age}, altura: ${dataClient.height}`)
}