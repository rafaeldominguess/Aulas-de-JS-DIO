//If/else uso sempre que tiver  poucas opções, caso tenha muitas melhor usar switch/case


let fruta = "laranja"


//let não percisa por let dnv, só chamar a variável e atribuir novo valor
fruta = "banana"


if (fruta == "banana") {
    console.log("Suco de banana")
} else  if (fruta ==  "laranja"){
    console.log("Suco de laranja")
} else {
    console.log("Não terá suco hoje!")
}