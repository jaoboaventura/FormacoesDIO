/*
Arrow Function:

As Arrow Functions (funções de seta) são uma forma mais concisa de escrever funções em JavaScript. Elas têm uma sintaxe mais curta e não alteram o valor de `this` no seu contexto, o que pode ser útil em certos casos.

Sintaxe básica:
(param1, param2, ...) => { bloco de código }

1. Exemplo simples com uma única linha (retorno implícito):
   const soma = (a, b) => a + b;
   console.log(soma(2, 3)); // Saída: 5

2. Exemplo com múltiplas linhas (retorno explícito):
   const multiplicar = (a, b) => {
       let resultado = a * b;
       return resultado;
   }
   console.log(multiplicar(2, 3)); // Saída: 6

3. Exemplo sem parâmetros:
   const dizerOi = () => console.log("Oi!");
   dizerOi(); // Saída: Oi!

4. Exemplo com um único parâmetro (sem necessidade de parênteses):
   const quadrado = x => x * x;
   console.log(quadrado(4)); // Saída: 16

Características das Arrow Functions:
- Sintaxe mais curta e mais clara.
- Não possuem o próprio `this` (herdam o `this` do contexto léxico).
- Não têm o objeto `arguments`.
- Não podem ser usadas como construtoras (não podem ser instanciadas com `new`).

Diferenças com funções tradicionais:
- Funções tradicionais podem redefinir o valor de `this` dentro do seu escopo, enquanto arrow functions mantêm o valor de `this` do escopo em que foram criadas.
*/

console.log("============ Função Tradicional ============")

function subtrair(num1, num2) {
    return num1-num2;
}

function somar(num1, num2) {
    return num1+num2;
}

const resultado = subtrair(10,5)
console.log(resultado)

console.log("============ Arrow Function ============")

const subtrai = (valor1, valor2) => valor1-valor2;
const soma = (valor1, valor2) => valor1+valor2;

const result = subtrai(60,20)
console.log(result)