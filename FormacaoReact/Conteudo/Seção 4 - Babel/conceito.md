# Babel

## O que é o Babel?

O Babel é um transpilador JavaScript de código aberto e gratuito, cuja principal característica é converter código JS moderno em uma versão que os navegadores possam executar.

Ele é amplamente utilizado por desenvolvedores que precisam adaptar recursos modernos da linguagem JavaScript para versões que sejam compatíveis com a maioria dos navegadores.

## Inicializando o projeto

Para iniciar o projeto, comece inserindo o seguinte comando no terminal:

`npm init -y`

Agora, instale as dependências necessárias:

`npm add @babel/core @babel/preset-env @babel/preset-react babel-loader -D`

Após a instalação, crie um arquivo chamado `.babelrc` na pasta do projeto. Este arquivo servirá para configurar o Babel, e seu conteúdo deve ser o seguinte:

```json
{
    "presets": [
        "@babel/preset-env",
        ["@babel/preset-react", {"runtime": "automatic"}]
    ]
}