
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function formaDePagamento() {
    if (condicaoDePagamento === 'Débito') {
        return (aplicarDesconto(valorProduto, 10));
    } else if (condicaoDePagamento === 'Dinheiro' || condicaoDePagamento === 'Pix') {
        return (aplicarDesconto(valorProduto, 15));
    } else if (condicaoDePagamento === 'Parcelado' && (numeroParcelas >= 1 && numeroParcelas <= 2)) {
        return valorProduto;
    } else {
        return valorProduto + (valorProduto * 0.10);
    }
}

const valorProduto = 1000;
const numeroParcelas = 2; // usado se condicaoDePagamento === 'Parcelado'
const condicaoDePagamento = 'Débito'

console.log(formaDePagamento());
