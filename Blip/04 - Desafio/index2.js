// Desafio usando uma lista e laços de repetição.

let herois = [
    { nome: "Arteus", xp: 2000 },
    { nome: "Gamball", xp: 8000 },
    { nome: "Morfeu", xp: 6000 },
    { nome: "Artemis", xp: 10001 },
    { nome: "Domingues", xp: 4000 }
]

for (let i = 0; i < herois.length; i++) {
    let nomePersonagem = herois[i].nome;
    let xpPersonagem = herois[i].xp
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

    console.log(`O Herói ${nomePersonagem} está no nível ${nivelPersonagem}`)

}


