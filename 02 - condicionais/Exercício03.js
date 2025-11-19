/*  

    1 -  Elabora um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição  de pagamento.

    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.


    Código Condição de pagamento:

        - À  vista Débito, recebe 10% de desconto;
        - À vista no Dinheiro ou Pix, recebe 15% de desconto;
        - Em duas vezes, preço normal de etiqueta sem juros;
        - Acima de duas vezes, preço  normal de etiqueta  mais  juros de 10%;
*/

//Declaração  das variáveis:
const valorProduto = 100;
const condicaoDePagamento = 'Pix'; // opções: 'Débito' | 'Dinheiro' | 'Pix' | 'Parcelado'
const numeroParcelas = 4; // usado se condicaoDePagamento === 'Parcelado'

console.log('Valor do produto:', valorProduto);

if (condicaoDePagamento === 'Débito'){
    const valor = valorProduto - (valorProduto * 0.10);
    console.log(valor);
} else if (condicaoDePagamento === 'Dinheiro' || condicaoDePagamento === 'Pix' ){
    const valor = valorProduto - (valorProduto * 0.15);
    console.log(valor);
} else if (condicaoDePagamento === 'Parcelado' && (numeroParcelas >= 1 && numeroParcelas <= 2)){
    const valor = valorProduto;
    console.log(valor);
} else {
    const valor =  valorProduto + (valorProduto * 0.10)
    console.log(valor);
}