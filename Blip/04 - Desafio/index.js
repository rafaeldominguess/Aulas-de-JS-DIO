//Usando If/Else, apenas 1 personagem.

let nome = "Domingues"
let xpPersonagem = 10000
let nivelPersonagem = ""


if (xpPersonagem <= 1000) {
    nivelPersonagem = "Ferro";
} else if (xpPersonagem <= 2000) {
    nivelPersonagem = "Bronze";
} else if (xpPersonagem <= 5000) {
    nivelPersonagem = "Prata";
} else if (xpPersonagem <= 7000) {
    nivelPersonagem = "Ouro";
} else if (xpPersonagem <= 8000) {
    nivelPersonagem = "Platina";
} else if (xpPersonagem <= 9000) {
    nivelPersonagem = "Diamante";
} else if (xpPersonagem <= 10000) {
    nivelPersonagem = "Imortal";
} else {
    nivelPersonagem = "Radiante";
}



console.log(`O Herói ${nome} está no nível ${nivelPersonagem}`)