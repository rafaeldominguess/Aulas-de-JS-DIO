const { gets, print } = require('./funcoes_auxiliares03');

const valorSalario = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);

}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario > 1100 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(valorSalario);
const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto)
const valorTransferir = valorSalario - valorImposto + valorBeneficios;

print(valorTransferir);
