# DashClient

Este é um dashboard desenvolvido em React para monitoramento de informações dos clientes, com controle de autenticação e integração com uma API. O projeto utiliza o Vite como bundler e o Bootstrap para estilização dos formulários.

## Ferramentas Utilizadas
- React: Uma biblioteca
- JavaScript para construção de interfaces de usuário.
- Vite: Um bundler rápido para projetos em JavaScript.
- Bootstrap: Um framework CSS popular que fornece estilos e componentes pré-construídos para criar interfaces responsivas.
- Google Icons: Uma biblioteca de ícones fornecida pelo Google.
## Estrutura dos Arquivos

- APIDashClient/ #API feita para a execução do Backend 
```Lembrando que ela tem seu próprio README.md```
- node_modules/           # Dependências do projeto
- public/                 # Arquivos públicos (HTML, ícones, etc.)
- src/                    # Código-fonte do projeto
  - assets/               # Recursos (imagens, arquivos CSS, etc.)
   - img/                # Imagens utilizadas no projeto
  - components/           # Componentes reutilizáveis
    - LoginForm.jsx       # Componente de formulário de login
    - RegisterForm.jsx    # Componente de formulário de registro
  - hooks/                # Hooks personalizados
    - useAuthData.js      # Hook para autenticação de usuário
    - useClientData.js    # Hook para obtenção dos dados do cliente
  - interface/            # Interfaces de dados
    DashClientData.js   # Interface para os dados do cliente
  - App.css               # Estilos do componente App
  - App.jsx               # Componente principal do dashboard
  - main.jsx              # Gerenciador de rotas do aplicativo
- .eslintrc.cjs           # Configuração do ESLint
- .gitignore              # Arquivos ignorados pelo Git
- .gitattributes          # Configuração do Git
- index.html              # Página HTML principal
- package-lock.json       # Versões fixas das  dependências
- package.json            # Informações sobre o projeto e suas dependências
- vite.config.js          # Configuração do Vite
## Como Executar o Projeto
- Certifique-se de ter o Node.js instalado em sua máquina.
- Clone este repositório em sua máquina local.
- Abra o terminal na pasta do projeto e - execute o comando:
```
npm install
```
para instalar as dependências.

- Execute o comando:
```
npm run dev
```

para iniciar o servidor de desenvolvimento.
- Acesse o aplicativo em seu navegador no endereço http://localhost:5173.

- Excute:
 `npm run start-api-2` e `npm run start-api-` em outros terminais para rodar os simuladores de API
 
## Descrição do Código
O código deste projeto consiste em um dashboard responsivo para monitoramento de informações dos clientes. Ele é dividido em componentes reutilizáveis, como LoginForm e RegisterForm, que utilizam os componentes de formulário do Bootstrap para facilitar a criação e validação dos campos.

O componente App é o componente principal do dashboard, que exibe as informações dos clientes e faz requisições à API para obter os dados necessários. Ele utiliza os hooks personalizados useAuthData e useClientData para gerenciar a autenticação do usuário e a obtenção dos dados do cliente.

O arquivo `main.jsx` é responsável pelo gerenciamento de rotas do aplicativo, permitindo a navegação entre diferentes páginas, como a página de login e a página principal do dashboard.

O projeto também possui um design responsivo, adaptando-se a diferentes tamanhos de tela para proporcionar uma experiência de usuário agradável em dispositivos móveis e desktops, ou também telas bem maiores.
