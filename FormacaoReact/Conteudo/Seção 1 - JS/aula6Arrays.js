/*
Arrays:

Arrays são estruturas de dados usadas para armazenar múltiplos valores em uma única variável. Cada item em um array tem um índice, que começa em 0, permitindo acessar e manipular facilmente os valores.

1. Criação de arrays:
   - Usando colchetes:
     const numeros = [1, 2, 3, 4, 5];

   - Usando o construtor Array:
     const frutas = new Array('Maçã', 'Banana', 'Laranja');

2. Acessar elementos de um array:
   const frutas = ['Maçã', 'Banana', 'Laranja'];
   console.log(frutas[0]); // Saída: 'Maçã'
   console.log(frutas[2]); // Saída: 'Laranja'

3. Métodos comuns de arrays:

   - .push(item): Adiciona um item ao final do array.
     const frutas = ['Maçã', 'Banana'];
     frutas.push('Laranja'); // frutas = ['Maçã', 'Banana', 'Laranja']

   - .pop(): Remove o último item do array.
     frutas.pop(); // frutas = ['Maçã', 'Banana']

   - .shift(): Remove o primeiro item do array.
     frutas.shift(); // frutas = ['Banana', 'Laranja']

   - .unshift(item): Adiciona um item no início do array.
     frutas.unshift('Uva'); // frutas = ['Uva', 'Banana', 'Laranja']

   - .length: Retorna o tamanho do array.
     console.log(frutas.length); // Saída: 3

   - .indexOf(item): Retorna o índice do primeiro item encontrado ou -1 se o item não existir.
     console.log(frutas.indexOf('Banana')); // Saída: 1

   - .splice(início, quantos, item1, item2, ...): Remove ou adiciona itens em uma posição específica.
     frutas.splice(1, 1); // frutas = ['Maçã', 'Laranja'] (Remove a partir do índice 1, 1 item)

   - .slice(início, fim): Retorna uma cópia de uma parte do array sem modificar o original.
     const algumasFrutas = frutas.slice(1, 3); // Saída: ['Banana', 'Laranja']

   - .forEach(): Executa uma função para cada item do array.
     frutas.forEach((fruta) => console.log(fruta));

   - .map(): Cria um novo array com os resultados da função aplicada a cada item.
     const numeros = [1, 2, 3, 4];
     const dobro = numeros.map(numero => numero * 2); // Saída: [2, 4, 6, 8]

   - .filter(): Cria um novo array com os itens que atendem à condição.
     const numerosGrandes = numeros.filter(numero => numero > 2); // Saída: [3, 4]

   - .reduce(): Reduz o array a um único valor (como a soma de todos os elementos).
     const soma = numeros.reduce((total, valor) => total + valor, 0); // Saída: 10

   - .find(): Retorna o primeiro item que atende a uma condição.
     const maiorQueDois = numeros.find(numero => numero > 2); // Saída: 3

   - .findIndex(): Retorna o índice do primeiro item que atende a uma condição.
     const indice = numeros.findIndex(numero => numero > 2); // Saída: 2

4. Arrays multidimensionais:
   Arrays podem conter outros arrays como elementos.

   const matriz = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
   ];
   console.log(matriz[1][2]); // Saída: 6 (Acessa o valor da linha 1, coluna 2)

Conclusão:
- Arrays são uma estrutura de dados versátil e amplamente usada em JavaScript para armazenar coleções de dados.
- Existem diversos métodos para manipulação de arrays que facilitam o trabalho com grandes conjuntos de dados.
*/

const alunos = [
    {
        nome: 'João',
        idade: 25,
        profissao: 'Desenvolvedor'
    },
    {
        nome: 'Pedro',
        idade: 19,
        profissao: 'Projetista'
    },
    {
        nome: 'Anna',
        idade: 25,
        profissao: 'Dentista'
    }
]

// Adicionando itens:

alunos.push({
    nome: 'Luciene',
    idade: 51,
    profissao: 'Dona de Casa'
})

console.log("============ Procurando a idade ============")

console.log(alunos[3].idade) // Retorna a idade da Luciene (posição 3 no array)