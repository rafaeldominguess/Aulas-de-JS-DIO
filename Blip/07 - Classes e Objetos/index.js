//Classes, precisa sempre passar um constructor, nada mais é que uma função

class formaDeBolo {
    constructor(saborDaMassa, saborDoRecheio) {

        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
        
    }
}

//Estrutura utilizada para passar novos valores

let massaPizza = new formaDeBolo("Sabor da massa é chocolate", "Sabor do recheio é nutella");
let massaPizza2 = new formaDeBolo("Sabor da massa é calabresa", "Sabor do recheio é chocolate branco");

console.log(massaPizza)
console.log(massaPizza2)