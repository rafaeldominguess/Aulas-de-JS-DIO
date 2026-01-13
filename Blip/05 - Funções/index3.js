


function calcularNivel(quantidadeVitorias, quantidadeDerrotas) {

    let saldoVitorias = quantidadeVitorias - quantidadeDerrotas
    let nivel = ""

    if (saldoVitorias < 11) {
        nivel = "Ferro"
    } else if (saldoVitorias < 21) {
        nivel = "Bronze"
    } else if (saldoVitorias < 51) {
        nivel = "Prata"
    } else if (saldoVitorias < 81) {
        nivel = "Ouro"
    } else if (saldoVitorias < 91) {
        nivel = "Diamante"
    } else if (saldoVitorias < 101) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
}



const listaDePartidas = [
    [90,10],
    [200,10],
    [10,2]
]

for (let i = 0; i < listaDePartidas.length; i++) {
    
    const [vitorias, derrotas] = listaDePartidas[i];
    let resultado = calcularNivel(vitorias, derrotas);
    console.log(resultado);
}






