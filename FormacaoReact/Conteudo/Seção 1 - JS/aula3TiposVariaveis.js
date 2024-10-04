/*
Principais variáveis do JS: 
var: possui escopo global ou de função, ou seja, quando declarada fora de uma função, será acessível em todo o código, mas se for declarada dentro de uma função, seu escopo será limitado àquela função. Pode ser redeclarada e alterada.

let: possui escopo de bloco, ou seja, só será acessível dentro do bloco ({ }) em que foi definida. Não pode ser redeclarada no mesmo escopo, mas pode ser alterada.

const: possui escopo de bloco, assim como let, mas a principal diferença é que o valor de uma constante NÃO pode ser alterado após ser atribuído. É importante lembrar que, para objetos e arrays, embora a referência não possa ser alterada, suas propriedades ou itens podem ser modificados.

Tipos:
Boolean: true e false;
Null: nulo;
undefined: indefinido;
Number: variável numérica;
String: variável de texto.
*/

const nome = 'João';
let aprovado = true;
var nota = 8;

aprovado = false;
nota = 7;