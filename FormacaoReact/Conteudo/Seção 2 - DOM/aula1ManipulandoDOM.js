/*
Operações básicas com o DOM (Document Object Model): O DOM permite que você manipule e interaja com o conteúdo HTML de uma página web, como acessar elementos, modificar seu conteúdo e adicionar ou remover elementos.

Principais operações:
*/

// 1. Selecionar elementos
const titulo = document.getElementById("titulo"); // Seleciona um elemento pelo ID
const paragrafos = document.getElementsByClassName("paragrafo"); // Seleciona elementos pela classe
const botoes = document.querySelectorAll("button"); // Seleciona todos os botões (usando seletores CSS)

console.log(titulo); // Exibe o elemento com o ID 'titulo'
console.log(paragrafos); // Exibe todos os elementos com a classe 'paragrafo'
console.log(botoes); // Exibe todos os botões

// 2. Modificar o conteúdo de um elemento
titulo.textContent = "Novo Título"; // Altera o texto do elemento com ID 'titulo'
paragrafos[0].innerHTML = "Este é o <strong>primeiro</strong> parágrafo."; // Modifica o conteúdo HTML do primeiro parágrafo

// 3. Alterar estilos de elementos
titulo.style.color = "blue"; // Altera a cor do texto do título
paragrafos[0].style.fontSize = "18px"; // Modifica o tamanho da fonte do primeiro parágrafo

// 4. Adicionar e remover classes
titulo.classList.add("novo-estilo"); // Adiciona uma classe CSS ao título
paragrafos[0].classList.remove("paragrafo"); // Remove a classe 'paragrafo' do primeiro elemento

// 5. Criar e adicionar novos elementos ao DOM
const novoParagrafo = document.createElement("p"); // Cria um novo elemento <p>
novoParagrafo.textContent = "Este é um novo parágrafo.";
document.body.appendChild(novoParagrafo); // Adiciona o novo parágrafo ao fim do <body>

// 6. Remover elementos do DOM
document.body.removeChild(paragrafos[1]); // Remove o segundo parágrafo da página

// 7. Lidar com eventos (exemplo de clique em um botão)
botoes[0].addEventListener("click", () => {
  alert("Botão clicado!");
});

/*
Conclusão:
Essas operações são a base da manipulação do DOM em JavaScript, permitindo que você interaja dinamicamente com o conteúdo HTML da página, modifique estilos, manipule classes e responda a eventos de interação do usuário.
*/