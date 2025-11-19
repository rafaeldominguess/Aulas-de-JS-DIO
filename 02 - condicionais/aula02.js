//Declarei uma variável
const numero  = 0;

//Resto (%) da divisão por 5 igual a 0?
const numeroDivisivelPor5 = (numero % 5) === 0;
//Se  sim vai dar true, se não vai dar false

//Se e Senão
if  (numero === 0)  {
    console.log('Número inválido!')
} else if (numeroDivisivelPor5) {
    console.log('Número divisível!')
} else {
    console.log('Não  é  divisível!')
}