# Documentação do Projeto IBGE News

Esse projeto é resultante do desafio de front-end lançado pela [Trybe](https://www.betrybe.com/), com o objetivo de avaliar a qualidade técnica da pessoa desenvolvedora. O projeto teve que seguir um série de requisitos e especificações a partir de um layout no **[figma](https://www.figma.com/file/KAzG24r3c9QCowMCi1LgTl/News-Website-UI-and-Presentation-for-Opportunists-(Community)?type=design&mode=design)**:

**Também seguiu a seguinte lista de requisitos:**

- A pessoa usuária deve ter acesso às notícias mais recentes do IBGE
- A pessoa usuária deve conseguir acessar a notícia completa clicando em seu link
- A pessoa usuária deve ter a informação de quantos dias atrás essa notícia foi publicada
- A pessoa usuária deve conseguir favoritar as notícias que mais gostou
- A criação de testes é um importante indicador de que as funcionalidades estão sendo verificadas, como o Mock da API e testes das principais funcionalidades

## Como rodar o projeto 🚀

> *instruções válidas para o sistema operacional Linux 🐧
> 
1. No seu computador use `Ctrl + Alt + t` para abrir o terminal
2. Navegue para o diretório local de sua preferência para clonar o projeto com `cd /home/user/<diretorio>`
3. Cole no terminal o seguinte comando `git clone git@github.com:IMatheusmaia/desafio-trybe-frontend-ibge-news-react-ts.git`
4. Navegue até o diretório do projeto com `cd desafio-trybe-frontend-ibge-news-react-ts/ibge-news-react-ts/`
5. Instale dependências e bibliotecas para que o projeto funcione com `npm install`
6. Execute o comando `npm run dev` ou `npm run preview` e espere o seu navegador abrir
7. ***Opcional:*** No depurador do navegador utilize o modo de visualização para dispositivos móveis, das dimensões `375px a 768px`

## Estrutura do Projeto 🏗️

```
  ├── ibge-news-react-ts
  │   ├── public
  │   ├── src
  |    ├── assets
  │         └── **
  |    ├── components
  │         └── **
  |    ├── context
  │         └── **
  |    ├── pages
  │         └── **
  |    ├── services
  │         └── **
  |    ├── styles
  │         └── **
  |    ├── tests
  │         └── **
  |    ├── utils
  │         └── **
  │    └── App.tsx
  │    └── index.css
  │    └── main.tsx
  │    └── types.ts
  │    └── vite-env.d.ts
  │ └── .eslintrc.json
  │ └── .gitignore
  │ └── index.html
  │ └── package-lock.json
  │ └── package.json
  │ └── setupTests.ts
  │ └── tsconfig.json
  │ └── tsconfig.node.json
  │	└── vite.config.ts
├── README.md
```

## Como rodar os testes 🧪

1. Certifique-se que esteja no diretório raiz do projeto e execute o comando `npm run test` ou teste um arquivo específico com `npm run test <componente>` 

> * o nome dos componentes testados estão descritos no diretório /src/tests
> 
2. Para ver a cobertura dos testes basta executar `npm run coverage`

## Deploy 🕸️
> gerado com o pacote gh-pages
> 
endereço: https://imatheusmaia.github.io/desafio-trybe-frontend-ibge-news-react-ts
