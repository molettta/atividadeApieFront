# 🍎 API Frontend - Projeto Educacional

> **Projeto simples e didático para ensinar alunos iniciantes a trabalhar com APIs REST, Frontend, Backend e Docker!**

---

## 📚 Sobre o Projeto

Este é um projeto educacional desenvolvido para ensinar conceitos fundamentais de desenvolvimento web de forma prática e progressiva. O projeto utiliza **Docker Compose** para facilitar o ambiente de desenvolvimento, permitindo que os alunos foquem no aprendizado sem se preocupar com configurações complexas.

### 🎯 Objetivos de Aprendizado

- ✅ Entender como Frontend e Backend se comunicam
- ✅ Aprender a criar e testar APIs REST
- ✅ Trabalhar com requisições HTTP (GET, POST, DELETE)
- ✅ Usar ferramentas profissionais (Postman, Docker)
- ✅ Desenvolver habilidades práticas de programação

---

## 🏗️ Arquitetura do Projeto

### Backend (Node.js/Express)

O backend é desenvolvido em **JavaScript** usando **Express.js**, um framework popular para criar APIs REST.

**Características:**
- 🚀 **Auto-reload automático** com **Nodemon** (daemon que monitora mudanças)
- 📝 Endpoints simples e didáticos
- 🔄 Atualizações instantâneas ao salvar arquivos
- 📦 Dependências gerenciadas via npm

**Localização:** `backend/server.js`

### Frontend (HTML/CSS/JavaScript)

O frontend é uma página web simples usando **HTML, CSS e JavaScript puro**, servida pelo **Nginx**.

**Características:**
- 🎨 Interface visual moderna e responsiva
- 🔄 **Atualizações automáticas** via volumes do Docker
- 📡 Comunicação com backend via Fetch API
- 🌐 Servido pelo Nginx (servidor web profissional)

**Localização:** `frontend/index.html`

### Docker Compose

O projeto utiliza **Docker Compose** para orquestrar dois containers:

1. **Backend Container** (Node.js)
   - Porta: `3000`
   - Auto-reload com Nodemon
   - Volumes montados para edição em tempo real

2. **Frontend Container** (Nginx)
   - Porta: `8080`
   - Servindo arquivos estáticos
   - Volumes montados para edição em tempo real

**Por que Docker?**
- ✅ Ambiente isolado e consistente
- ✅ Fácil de configurar (um comando e pronto!)
- ✅ Funciona igual em qualquer sistema operacional
- ✅ Não "suja" o sistema do aluno

---

## 🚀 Como Começar

### Pré-requisitos

- [Docker Desktop](https://www.docker.com/get-started) instalado e rodando
- Git instalado
- Editor de código (VS Code recomendado)

### Passo a Passo Rápido

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/molettta/atividadeApieFront.git
   cd atividadeApieFront
   ```

2. **Inicie os containers:**
   ```bash
   docker-compose up --build
   ```

3. **Acesse a aplicação:**
   - Frontend: http://localhost:8080
   - Backend: http://localhost:3000

4. **Comece pelos exercícios!**
   - Leia o arquivo `inicia.md` para instruções detalhadas
   - Siga os exercícios na ordem (1, 2, 3, 4, 5)

---

## 📖 Exercícios Disponíveis

O projeto contém **5 exercícios progressivos** que vão do básico ao avançado:

### 📘 Exercício 1: Conhecendo o Postman
**Arquivo:** `exercicio1-postman.md`

- O que é Postman e por que usar
- Como instalar o Postman Desktop
- Como testar endpoints existentes
- Primeiro contato com requisições HTTP

**Conceitos aprendidos:** Métodos HTTP, URLs, JSON, Status Codes

---

### 🍎 Exercício 2: Adicionando e Removendo Frutas
**Arquivo:** `exercicio2-adicionando-e-removendo-frutas.md`

- Criar endpoints POST (adicionar dados)
- Criar endpoints DELETE (remover dados)
- Trabalhar com `req.body` e `req.params`
- Validação de dados

**Conceitos aprendidos:** POST, DELETE, req.body, req.params, Arrays, Validação

---

### 🎯 Exercício 3: Criando Seu Primeiro Endpoint
**Arquivo:** `exercicio3-endpoint.md`

- O que é um endpoint
- Onde adicionar endpoints no código
- Como criar um endpoint GET personalizado
- Testar no Postman

**Conceitos aprendidos:** Estrutura de endpoints, req/res, JSON responses

---

### 🎨 Exercício 4: Frontend Chamando a API
**Arquivo:** `exercicio4-frontend-chamando-api.md`

- Como fazer o frontend chamar o backend
- Usar Fetch API para requisições HTTP
- Atualizar a página dinamicamente
- Tratar erros com try/catch

**Conceitos aprendidos:** Fetch API, async/await, DOM manipulation, Template strings

---

### 🧮 Exercício 5: Operações Matemáticas
**Arquivo:** `exercicio5-operacoes-matematicas.md`

- Implementar múltiplos endpoints seguindo padrões
- Criar funções JavaScript reutilizáveis
- Adicionar múltiplas seções no frontend
- Validação avançada (divisão por zero)

**Conceitos aprendidos:** Padrões de código, Reutilização, Validações complexas

---

## 🔄 Como Funciona o Auto-Reload

### Backend - Nodemon (Daemon)

O backend usa **Nodemon**, um daemon (processo em segundo plano) que monitora mudanças nos arquivos.

**Como funciona:**
1. Você salva o arquivo `server.js`
2. Nodemon detecta a mudança automaticamente
3. Nodemon reinicia o servidor Node.js
4. Suas alterações estão ativas! ✨

**Configuração:** `backend/nodemon.json` e `backend/package.json`

**Flag importante:** `--legacy-watch` (necessário para funcionar com volumes do Docker no Windows)

### Frontend - Volumes do Nginx

O frontend usa **volumes do Docker** que mapeiam a pasta local para o container do Nginx.

**Como funciona:**
1. Você edita `frontend/index.html`
2. O arquivo é automaticamente refletido no container
3. Recarregue a página no navegador (`F5`)
4. Suas alterações aparecem! ✨

**Configuração:** `docker-compose.yml` (volumes)

**Nota:** O Nginx serve arquivos estáticos, então você precisa recarregar a página manualmente no navegador.

---

## 📁 Estrutura do Projeto

```
atividadeApieFront/
│
├── backend/                    # Código do Backend (Node.js/Express)
│   ├── server.js              # Servidor principal com todos os endpoints
│   ├── package.json           # Dependências Node.js
│   ├── Dockerfile             # Configuração Docker do backend
│   ├── nodemon.json           # Configuração do Nodemon (auto-reload)
│   └── .dockerignore          # Arquivos ignorados pelo Docker
│
├── frontend/                   # Código do Frontend (HTML/CSS/JS)
│   ├── index.html             # Página principal
│   └── Dockerfile             # Configuração Docker do frontend (Nginx)
│
├── docker-compose.yml          # Orquestração dos containers
│
├── inicia.md                   # Guia de início completo
│
├── exercicio1-postman.md       # Exercício 1: Postman
├── exercicio2-adicionando-e-removendo-frutas.md
├── exercicio3-endpoint.md      # Exercício 3: Criar endpoint
├── exercicio4-frontend-chamando-api.md
├── exercicio5-operacoes-matematicas.md
│
└── README.md                   # Este arquivo
```

---

## 💻 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Nodemon** - Auto-reload em desenvolvimento
- **CORS** - Permite requisições do frontend

### Frontend
- **HTML5** - Estrutura
- **CSS3** - Estilização
- **JavaScript (ES6+)** - Lógica e interatividade
- **Fetch API** - Requisições HTTP
- **Nginx** - Servidor web

### DevOps
- **Docker** - Containerização
- **Docker Compose** - Orquestração

---

## 🔧 Comandos Úteis

### Docker Compose

```bash
# Iniciar os containers
docker-compose up --build

# Iniciar em background
docker-compose up -d

# Parar os containers
docker-compose down

# Ver logs
docker-compose logs -f

# Reconstruir containers
docker-compose up --build --force-recreate
```

### Git (Para Alunos)

#### 📚 Como Trabalhar com Git neste Projeto

**IMPORTANTE:** Este é um repositório educacional. Siga estas diretrizes:

1. **Não faça push direto na branch main**
   - Crie sua própria branch
   - Faça commits organizados
   - Peça ajuda ao professor antes de fazer push

2. **Commits descritivos:**
   ```bash
   # ✅ Bom
   git commit -m "Adiciona endpoint de multiplicação"
   git commit -m "Implementa função calcularDivisao no frontend"
   
   # ❌ Ruim
   git commit -m "mudanças"
   git commit -m "fix"
   ```

3. **Organize seus commits:**
   - Um commit por funcionalidade
   - Commits pequenos e frequentes
   - Não misture várias coisas em um commit

4. **Sempre verifique antes de commitar:**
   ```bash
   # Ver o que mudou
   git status
   git diff
   
   # Adicionar arquivos específicos
   git add arquivo1.js arquivo2.html
   
   # Commitar
   git commit -m "Descrição clara"
   ```

5. **Se trabalhar em grupo:**
   - Sempre faça `git pull` antes de começar
   - Comunique mudanças importantes
   - Resolva conflitos com cuidado

---

## 🎓 Para Professores

### Estrutura Pedagógica

Os exercícios foram projetados para:
- ✅ Progressão gradual de dificuldade
- ✅ Conceitos isolados e bem explicados
- ✅ Exemplos práticos e funcionais
- ✅ Soluções de referência disponíveis
- ✅ Espaço para experimentação

### Pontos de Atenção

1. **Docker Desktop:** Alunos precisam ter Docker Desktop rodando
2. **Portas:** Verificar se 3000 e 8080 estão livres
3. **Git:** Ensinar boas práticas desde o início
4. **Debugging:** Ensinar a usar Console do navegador (F12)

---

## 🐛 Solução de Problemas

### Docker não inicia
- Verifique se Docker Desktop está rodando
- Reinicie o Docker Desktop
- Veja mais em `inicia.md`

### Backend não atualiza
- Verifique se nodemon está rodando
- Veja os logs: `docker-compose logs backend`
- Verifique se salvou o arquivo

### Frontend não atualiza
- Recarregue a página no navegador (`F5`)
- Verifique se o arquivo foi salvo
- Limpe o cache do navegador (`Ctrl + Shift + R`)

### Erros de CORS
- Verifique se `app.use(cors())` está no backend
- Verifique se o backend está rodando na porta 3000

---

## 📚 Recursos de Aprendizado

### Documentação Oficial
- [Express.js](https://expressjs.com/)
- [Docker](https://docs.docker.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Conceitos Importantes
- **REST API** - Arquitetura de APIs
- **HTTP Methods** - GET, POST, PUT, DELETE
- **JSON** - Formato de dados
- **Async/Await** - Programação assíncrona
- **DOM** - Document Object Model

---

## 🤝 Contribuindo

Este é um projeto educacional. Se você é aluno:
- Siga os exercícios na ordem
- Faça suas próprias experimentações
- Peça ajuda quando necessário
- Compartilhe conhecimento com colegas

---

## 📝 Licença

Este projeto é educacional e está disponível para fins de aprendizado.

---

## 🎉 Agradecimentos

Projeto desenvolvido para facilitar o aprendizado de desenvolvimento web, APIs e Docker para alunos iniciantes.

---

## 📞 Suporte

Se tiver dúvidas:
1. Consulte o arquivo `inicia.md` para instruções detalhadas
2. Revise os exercícios (têm soluções de referência)
3. Verifique a seção "Solução de Problemas" acima
4. Peça ajuda ao professor

---

**Bons estudos e divirta-se programando! 🚀✨**

---

*Última atualização: 2025*

