# Golden Raspberry Awards - Frontend

## Descrição

Este projeto é o frontend desenvolvido em Angular para o sistema Golden Raspberry Awards. Ele exibe informações sobre anos com múltiplos vencedores, intervalos de produtores premiados e estúdios mais premiados. Também inclui uma listagem paginada de filmes.

---

## Funcionalidades

- **Dashboard**:
  - Exibe intervalos de produtores premiados.
  - Mostra os estúdios mais premiados.
  - Lista anos com múltiplos vencedores.

- **Listagem de Filmes**:
  - Permite filtrar e paginar os filmes disponíveis.

- **Carregamento com Spinner**:
  - Exibe um indicador visual enquanto as chamadas à API estão sendo realizadas.

---

## Requisitos

- **Node.js** (versão 16.20.0).
- **Angular CLI** (versão 13).
- **Package Manager** (npm 8.19.4).

---

## Configuração

1. Clone o repositório:

   ```bash
   git clone <url_do_repositorio>

2. Instale os pacotes:

   ```bash
   npm install

Obs. se estiver usando NVM para rodar versão mais antiga do angular não esqueça de colocar o "npx" na frente do comando ex: "npx npm install", adicione para rodar o projeto também.

3. Navegue até a raiz da pasta e execute o comando:

   ```bash
   ng serve -o

4. Certifique-se de que o projeto backend já esteja rodando conforme as instruções do repositório do backend.

5. Após rodar o projeto de backend API,se necessário, confirme se a base url apresentada é a mesma configurada no arquivo enviroment.ts do projeto angular em:

   ```bash
    src\environments\environments.ts
