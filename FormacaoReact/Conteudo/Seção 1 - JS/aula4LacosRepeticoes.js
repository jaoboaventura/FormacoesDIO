/*
Principais laços de repetição:

1. for: 
   Um loop tradicional usado para repetir um bloco de código um número específico de vezes. Geralmente, utiliza um contador.

   Exemplo:
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }
   // Saída: 0, 1, 2, 3, 4

2. while: 
   Executa o bloco de código enquanto a condição fornecida for verdadeira. Ideal quando você não sabe o número exato de repetições.

   Exemplo:
   let i = 0;
   while (i < 5) {
       console.log(i);
       i++;
   }
   // Saída: 0, 1, 2, 3, 4

3. forEach: 
   Um método usado em arrays para executar uma função para cada elemento do array. Não retorna um novo array e não pode ser interrompido.

   Exemplo:
   const array = [1, 2, 3, 4];
   array.forEach(function(item) {
       console.log(item);
   });
   // Saída: 1, 2, 3, 4

4. map: 
   Também é usado em arrays para executar uma função em cada elemento, mas ao contrário do forEach, o map retorna um novo array com os resultados.

   Exemplo:
   const array = [1, 2, 3, 4];
   const newArray = array.map(function(item) {
       return item * 2;
   });
   console.log(newArray);
   // Saída: [2, 4, 6, 8]
*/

console.log("============ for ============")

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(`${i}*5 = ${i*5}`)
    }
}

console.log("============ while ============")

let x = 1;
while(x<10) {
    console.log(`${x}*5 = ${x*5}`)
    x++
}

console.log("============ forEach ============")

const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

valores.forEach((value) => {
    console.log(`${value}*5 = ${value*5}`)
})

console.log("============ map ============")

const valores2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const resultado = valores.map((value) => {
    return value * 5;
});

console.log(resultado);