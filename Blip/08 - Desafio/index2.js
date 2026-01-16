class Heroi {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
        this.energia = 100
    }

    ataque() {

        if (this.energia < 20) {
            console.log(`O ${this.type} ${this.name} está exausto (Energia: ${this.energia}%) e não pode atacar!`)
            return
        }

        let ataque

        switch (this.type) {
            case "mago":
                ataque = "magia"
                break;

            case "guerreiro":
                ataque = "espada"
                break;

            case "monge":
                ataque = "artes marciais"
                break;

            case "ninja":
                ataque = "shuriken"
                break;

            default:
                ataque = "Não atacou!"
                break;
        }
        this.energia -= 20
        console.log(`O ${this.type} atacou usando ${ataque}. (Energia Restante: ${this.energia}%)`)
    }
}

const mago = new Heroi("Arthemis", 20, "mago")
const guerreiro = new Heroi("Kratos", 18, "guerreiro")
const monge = new Heroi("Atreus", 11, "monge")
const ninja = new Heroi("Zeus", 34, "ninja")


const herois = [mago, guerreiro, monge, ninja]


for (let i = 0; i < herois.length; i++) {
    herois[i].ataque()
}

