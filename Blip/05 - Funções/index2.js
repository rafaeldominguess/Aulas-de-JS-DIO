//funções com retorno, quando e para que usar.
// return só pode retornar 1 valor ou 1 objeto, utilizado bastante para expressões

function getName(name) {
    const fullName = name.split(" ") // transforma string(que vai ser um nome completo) em array(lista)

    const firstName = fullName[0] //primeiro nome = 1º item da lista 
    const lastName = fullName[fullName.length - 1] //último nome = último item da lista 

    return `${firstName} ${lastName}` // retorno os valores 
}

console.log("Clientes:")

let userName = getName("Roger Gustavo dos Santos")
console.log(userName)

userName = getName("Ana Beatriz Soares")
console.log(userName)