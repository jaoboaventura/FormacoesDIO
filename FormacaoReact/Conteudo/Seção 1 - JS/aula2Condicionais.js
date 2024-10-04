/*
Estruturas condicionais básicas:
if
else
switch
ternário

Operadores lógicos:
&&       ->      E (Todas as condições devem ser verdadeiras para o resultado ser verdadeiro)
||       ->      OU (Pelo menos uma das condições deve ser verdadeira para o resultado ser verdadeiro)
==       ->      IGUAL (Verifica se os valores são iguais, ignorando o tipo. Ex.: 2 (number) == '2' (string))
!=       ->      DIFERENTE (Verifica se os valores são diferentes, ignorando o tipo. Ex.: 2 (number) != 3 (number))
===      ->      ESTRITAMENTE IGUAL (Verifica se os valores e tipos são iguais. Ex.: 2 (number) === 2 (number))
!==      ->      ESTRITAMENTE DIFERENTE (Verifica se os valores ou tipos são diferentes. Ex.: 2 (number) !== '2' (string))
>        ->      MAIOR QUE (Verifica se o valor à esquerda é maior que o da direita. Ex.: 5 > 3)
<        ->      MENOR QUE (Verifica se o valor à esquerda é menor que o da direita. Ex.: 3 < 5)
*/


// IF, ELSE e ELSE IF
// 
// 
const nota = 8
if (nota < 5) {
    console.log("Reprovado!")
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação!")
} else {
    console.log("Aprovado!")
}

// SWITCH/CASE
// 
// 
const nota2 = 7;

switch (true) {
    case nota2 < 5:
        console.log("Reprovado!");
        break;

    case nota2 >= 7:
        console.log("Aprovado");
        break;

    default:
        console.log("Recuperação!");
}

// OPERADOR TERNÁRIO
// 
// 
const nota3 = 7;

nota3 < 5 ? console.log("Reprovado") : console.log("Aprovado");