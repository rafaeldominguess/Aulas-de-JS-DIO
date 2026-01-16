class Heroi {
    constructor(name, age, type ) {
        this.name = name
        this.age = age
        this.type = type

    }
    atack() {
        let ataque

        if(this.type === "mago"){
            ataque = "magia"
        } else if (this.type === "guerreiro"){
            ataque = "espada"
        } else if(this.type === "monge"){
            ataque = "artes marciais"
        } else if (this.type === "ninja"){
            ataque = "shuriken"
        }
        console.log(`o ${this.type} atacou usando ${ataque}`)
    }
}

const mago = new Heroi("Arthemis", 20, "mago");
const guerreiro = new Heroi("Kratos", 18, "guerreiro");
const monge = new Heroi("Atreus", 34, "monge");
const ninja = new Heroi("Spike", 19, "ninja");

const herois = [mago, guerreiro, monge, ninja]

for (let i = 0; i < herois.length; i++) {
    herois[i].atack()
}




