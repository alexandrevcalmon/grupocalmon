# Grupo Calmon - Consultoria & Treinamentos

Este é o repositório para o site oficial do Grupo Calmon. O projeto é construído com React, TypeScript, Vite e Tailwind CSS.

## Visão Geral

[Adicionar uma breve descrição do projeto aqui. O que é o Grupo Calmon e qual o objetivo do site.]

## Pré-requisitos

- Node.js (versão X.X.X ou superior)
- npm (ou yarn)

## Instalação

1.  Clone o repositório:
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd [NOME_DA_PASTA_DO_PROJETO]
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
    (ou `yarn install`)

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Inicia o servidor de desenvolvimento Vite.
Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) para visualizar no navegador. A página será recarregada se você fizer edições.

### `npm run build`

Compila o aplicativo para produção na pasta `dist`.
Ele agrupa corretamente o React no modo de produção e otimiza o build para o melhor desempenho.

### `npm run lint`

Executa o ESLint para analisar o código em busca de problemas e aplicar formatação.

### `npm run preview`

Inicia um servidor local para visualizar os arquivos da build de produção (da pasta `dist`).

## Estrutura do Projeto

```
calmon-consultoria/
├── public/             # Arquivos estáticos (imagens, etc.)
├── src/                # Código fonte da aplicação
│   ├── components/     # Componentes React reutilizáveis
│   │   ├── layout/     # Componentes de layout (Navbar, Footer)
│   │   ├── sections/   # Componentes de seções de página
│   │   └── ui/         # Componentes de UI genéricos (Button, Container)
│   ├── data/           # Arquivos de dados estáticos (ex: depoimentos)
│   ├── lib/            # Funções utilitárias, hooks, tipos, constantes
│   ├── pages/          # Componentes de página (rotas)
│   ├── App.tsx         # Componente principal da aplicação com rotas
│   ├── main.tsx        # Ponto de entrada da aplicação React
│   └── index.css       # Estilos globais e diretivas Tailwind
├── .eslintrc.cjs       # Configuração do ESLint
├── tailwind.config.js  # Configuração do Tailwind CSS
├── vite.config.ts      # Configuração do Vite
├── tsconfig.json       # Configuração do TypeScript
└── README.md           # Este arquivo
```

## Tecnologias Utilizadas

-   **React:** Biblioteca JavaScript para construir interfaces de usuário.
-   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
-   **Vite:** Ferramenta de build moderna para desenvolvimento frontend.
-   **Tailwind CSS:** Framework CSS utility-first.
-   **React Router DOM:** Para roteamento do lado do cliente.
-   **Framer Motion:** Para animações.
-   **Lucide React:** Para ícones SVG.

## Contribuição

[Se aplicável, adicione diretrizes sobre como contribuir para o projeto.]

## Licença

[Especifique a licença do projeto, se houver.]
