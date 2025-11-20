/*  

    1 -  O IMC é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula IMC:
    IMC = peso / (altura*altura)

    Elabore um  algoritmo que  dado o peso e a altura de um  adulto mostre suas condição de acordo com a tabela abaixo.

    IMC em adultdos condição:
        - Abaixo de 18.5 - Abaixo do peso;
        - Entre 18.5 e 25 - Peso normal;
        - Entre 25 e 30 - Acima do peso;
        - Entre 30 e 40 - Obeso;
        - Acima de 40 - Obesidade grave;
*/


function calcularImc(peso, altura) {
    return peso / (altura * altura); //ou  const imc = peso / Math.pow(altura,2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

function main(){
    //Declaração  das variáveis:
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    
    //Resultado
    console.log('Seu IMC é:' + imc.toFixed(2)); //Para retornar apenas 2 valores após a vírgula.
    console.log(classificarImc(imc));
}

main();