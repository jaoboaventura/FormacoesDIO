/*
Funcionalidades do ES6+:

1. filter:
   O método `filter` cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
   Exemplo:
*/
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Saída: [2, 4, 6]

/*
2. find:
   O método `find` retorna o valor do primeiro elemento que satisfaz a função de teste fornecida. Se nenhum valor satisfizer a função, retorna `undefined`.
   Exemplo:
*/
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 22 }
];
const pessoaMaiorDeIdade = pessoas.find(pessoa => pessoa.idade >= 18);
console.log(pessoaMaiorDeIdade); // Saída: { nome: 'João', idade: 25 }

/*
3. findIndex:
   O método `findIndex` retorna o índice do primeiro elemento que satisfaz a função de teste fornecida. Se nenhum valor satisfizer a função, retorna -1.
   Exemplo:
*/
const indiceJoao = pessoas.findIndex(pessoa => pessoa.nome === 'João');
console.log(indiceJoao); // Saída: 0

/*
4. reduce:
   O método `reduce` executa uma função redutora sobre cada elemento do array, resultando em um único valor. Você pode fornecer um valor inicial como segundo argumento.
   Exemplo:
*/
const soma = numeros.reduce((total, numero) => total + numero, 0);
console.log(soma); // Saída: 21

/*
5. some:
   O método `some` verifica se pelo menos um dos elementos do array satisfaz a função de teste fornecida. Retorna `true` se encontrar um elemento que satisfaça a condição, caso contrário, retorna `false`.
   Exemplo:
*/
const temNumeroMaiorQueQuatro = numeros.some(numero => numero > 4);
console.log(temNumeroMaiorQueQuatro); // Saída: true

/*
6. every:
   O método `every` verifica se todos os elementos do array satisfazem a função de teste fornecida. Retorna `true` se todos os elementos passarem no teste, caso contrário, retorna `false`.
   Exemplo:
*/
const todosMenoresQueSete = numeros.every(numero => numero < 7);
console.log(todosMenoresQueSete); // Saída: true

/*
Conclusão:
- Essas funcionalidades do ES6+ tornam o trabalho com arrays mais eficiente e expressivo.
- Métodos como `filter`, `find`, `reduce`, `some` e `every` são fundamentais para manipulação e análise de dados em JavaScript.
*/
