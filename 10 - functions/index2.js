function adicao (x, y){
    return x + y
}

function multiplicacao (x, y) {
    return x * y
}

function calcular (x, operation, y) {
    console.log(operation(x,y))
}

calcular(10, adicao, 10)
calcular(10, multiplicacao, 10)