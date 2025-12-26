
// * Ordem de declaração importa 

// Diferença Var, Let e Const

//Antigo e vaza escopo e poder receber outro valor igual let.
var var1 = 10;
var1 = 20;

//Se restringe a qualquer bloco, só poder ser invocada dentro do bloco
//O valor pode ser retribuido.
//Pode receber outro valor.
let var2 = 20;
var2 = 10;

//Basicamente igual ao let
//Porém não pode receber retribuição de valor 
// se foi declarado não pode receber outro valor.
const var3 = 'teste';

console.log(var1);
console.log(var2);
console.log(var3);