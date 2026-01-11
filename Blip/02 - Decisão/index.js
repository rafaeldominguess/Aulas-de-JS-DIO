// switch/case/break/default

//Uso quando tiver várias opções, também posso escolher se uso If/else ou switch/case, as duas tem a mesma função.


let fruta = "banana"

fruta = "laranja"


switch (fruta) {
    case "banana":
        console.log("Suco de banana")
        break; //break serve para quando ele ache o resultado não siga pra frente e encerre o fluxo.

    case "laranja": // colocando 2 consições para resultado = Vitamina
    case "morango": //posso concatenar também
        console.log("Vitamina de " + fruta)
        break;

    case "uva":
        console.log("Suco de uva")
        break;


    default: // usado para caso ele não ache nenhum resultado, ele cai aqui. Não é obrigado a ter default, mas é bom para caso não ache um case.
        console.log("Sem suco!")
}