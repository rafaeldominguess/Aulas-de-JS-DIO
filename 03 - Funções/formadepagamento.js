
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

function formaDePagamento() {
    if (condicaoDePagamento === 'Débito') {
        return (aplicarDesconto(valorProduto, 10));
    } else if (condicaoDePagamento === 'Dinheiro' || condicaoDePagamento === 'Pix') {
        return (aplicarDesconto(valorProduto, 15));
    } else if (condicaoDePagamento === 'Parcelado' && (numeroParcelas >= 1 && numeroParcelas <= 2)) {
        return valorProduto;
    } else {
        return (aplicarJuros(valorProduto, 10));
    }
}

const valorProduto = 1000;
const numeroParcelas = 4; // usado se condicaoDePagamento === 'Parcelado'
const condicaoDePagamento = 'Parcelado'

console.log(formaDePagamento());
