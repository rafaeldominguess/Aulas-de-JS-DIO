/* Faça um programa que receba média de um aluno.
Caso a média seja < 5 imprima "Reprovado".
Caso a média seja >+ 5 e <7 imprima "Recuperação".
Caso a média seja >= 7 imprima "Aprovado".

     Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação
*/

const { gets, print } = require('./funcoes_auxiliares01');

const mediaNotas = gets();

if (mediaNotas < 5){
    print('Reprovado');
} else if (mediaNotas >= 5 && mediaNotas < 7)  {
    print('Recuperação');
} else {
    print('Apovado')
}
