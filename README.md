# Portfólio - Francisco Filipe

Portfólio pessoal com interface de terminal interativo. A aplicação apresenta meu perfil, projetos, experiências profissionais, formação, habilidades, cursos e contatos por meio de comandos, com suporte a português e inglês.

**Site publicado:** [franciscofilipeee.dev](https://franciscofilipeee.dev)

## Funcionalidades

- Terminal com comandos e navegação pelo histórico usando as setas para cima e para baixo.
- Alternância entre português e inglês pelo botão no cabeçalho ou por comando.
- Perfil resumido no estilo `neofetch`, incluindo emprego atual.
- Projetos com descrições, tecnologias e links.
- Histórico profissional com empresas, períodos e atividades.
- Prévia e download do currículo em PDF.
- Listagem de cursos com instituição, período e carga horária.

## Tecnologias utilizadas

- **React 19:** componentes e estado da interface.
- **React Router 8:** rotas e renderização no servidor (SSR).
- **TypeScript:** tipagem do código.
- **Tailwind CSS 4:** estilos da aplicação.
- **Vite 8:** servidor de desenvolvimento e build.
- **Node.js e npm:** ambiente de execução e gerenciamento de dependências.
- **Docker e Docker Compose:** alternativa para execução em contêiner.
- **Vercel:** hospedagem do site.
- **Cloudflare:** proxy e gerenciamento do DNS do domínio.

## Dependências e bibliotecas

As versões abaixo correspondem aos intervalos declarados no `package.json`. O `package-lock.json` registra as versões resolvidas para instalação com `npm ci`.

### Dependências de execução

| Pacote | Versão declarada | Finalidade |
| --- | --- | --- |
| `react` | `^19.2.7` | Construção da interface |
| `react-dom` | `^19.2.7` | Renderização do React |
| `react-router` | `^8` | Roteamento e recursos do framework |
| `@react-router/node` | `^8` | Integração do React Router com Node.js |
| `@react-router/serve` | `^8` | Servidor para execução do build local |
| `react-terminal-ui` | `^1.4.0` | Interface e entrada de comandos do terminal |
| `isbot` | `^5.1.36` | Biblioteca de identificação de bots incluída nas dependências |

### Dependências de desenvolvimento

| Pacote | Versão declarada | Finalidade |
| --- | --- | --- |
| `@react-router/dev` | `^8` | Build, desenvolvimento e geração de tipos de rotas |
| `vite` | `^8.0.3` | Servidor de desenvolvimento e empacotamento |
| `typescript` | `^5.9.3` | Verificação de tipos |
| `tailwindcss` | `^4.3.3` | Estilização |
| `@tailwindcss/vite` | `^4.3.3` | Integração do Tailwind CSS com Vite |
| `@types/node` | `^22` | Tipos do Node.js |
| `@types/react` | `^19.2.14` | Tipos do React |
| `@types/react-dom` | `^19.2.3` | Tipos do React DOM |

## Estrutura de diretórios

```text
portfolio/
├── app/
│   ├── components/
│   │   ├── help.tsx             # Lista de comandos disponíveis
│   │   └── terminal.tsx         # Terminal, histórico e respostas dos comandos
│   ├── routes/
│   │   └── home.tsx             # Página inicial e metadados
│   ├── app.css                  # Estilos globais e do terminal
│   ├── i18n.ts                  # Conteúdo, traduções e aliases dos comandos
│   ├── root.tsx                 # Estrutura HTML, recursos e tratamento de erros
│   └── routes.ts               # Configuração das rotas
├── public/
│   ├── ascii-art.txt            # Arte exibida pelo neofetch
│   ├── curriculo-francisco-filipe.pdf
│   ├── favicon.ico
│   └── favicon.svg              # Ícone </> da aplicação
├── Dockerfile                  # Build e execução em contêiner
├── docker-compose.yml          # Configuração do serviço Docker
├── package.json                # Dependências e scripts
├── package-lock.json           # Versões resolvidas das dependências
├── react-router.config.ts      # Configuração do framework com SSR
├── tsconfig.json               # Configuração do TypeScript
├── vite.config.ts              # Plugins e configuração do Vite
└── README.md
```

## Instalação e execução local

### Pré-requisitos

- **Node.js 24**, versão utilizada pelo Dockerfile do projeto. As dependências instaladas exigem Node.js a partir de **22.22.0**.
- **npm** e **Git**.
- Docker com Docker Compose, caso escolha executar em contêiner.

### Instalar

```bash
git clone https://github.com/franciscofilipeee/portfolio.git
cd portfolio
npm ci
```

### Iniciar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173). Se a porta estiver ocupada, consulte o endereço informado no terminal.

A aplicação utiliza conteúdo definido no código e arquivos estáticos. Não é necessário configurar banco de dados ou variáveis de ambiente para executar localmente.

### Verificar os tipos

```bash
npm run typecheck
```

Esse comando gera os tipos das rotas e executa a verificação do TypeScript.

### Gerar e executar o build local

```bash
npm run build
npm run start
```

O build é gerado em `build/client` e `build/server`. O servidor local de produção utiliza a porta `3000` por padrão: [http://localhost:3000](http://localhost:3000).

### Executar com Docker Compose

```bash
docker compose up --build -d
```

Acesse [http://localhost:3000](http://localhost:3000). Para usar outra porta no host:

```bash
PORT=8080 docker compose up --build -d
```

Para encerrar os contêineres:

```bash
docker compose down
```

## Comandos do portfólio

Digite um comando e pressione **Enter**. O terminal aceita os aliases em português e inglês.

| Inglês | Português | Função |
| --- | --- | --- |
| `help` | `ajuda` | Listar comandos |
| `neofetch` | `neofetch` | Exibir resumo do perfil |
| `about` | `sobre` | Apresentar minha trajetória |
| `projects` | `projetos` | Listar projetos e tecnologias |
| `contact` | `contato` | Exibir contatos |
| `resume` | `curriculo` | Visualizar e baixar o currículo |
| `skills` | `habilidades` | Listar habilidades técnicas |
| `education` | `formacao` | Exibir formação acadêmica |
| `experiences` | `experiencias` | Exibir foco profissional |
| `work` | `trabalhos` | Listar empresas, períodos e atividades |
| `certifications` | `certificacoes` | Listar cursos |
| `language pt` / `language en` | `idioma pt` / `idioma en` | Alternar idioma |
| `clear` | `limpar` | Limpar o terminal |
| `exit` | `sair` | Solicitar fechamento da janela, sujeito à permissão do navegador |
