/*  

    1 - Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela a baixo.

    Média  =  (nota1 + nota2 + nota3) / 3;

    Classificação:
        - Média menor que 5, reprovado;
        - Média entrer 5 e 7, recuperação;
        - Média acima de 7, Aprovado;

*/

//Declaração  das variáveis:
const nota1 = 10;
const nota2 = 8;
const nota3 = 8;

//Cálculo  das notas:
const mediaNotas = (nota1 + nota2 + nota3) / 3;
console.log('Nota:', mediaNotas.toFixed(2));

if (mediaNotas < 5) {
    console.log('Reprovado!');
} else if (mediaNotas >= 5 && mediaNotas <= 7) {
    console.log('Recuperação!');
} else {
    console.log('Aprovado!');
}
