# 🚀 Como Iniciar o Projeto

Este é um projeto simples com Docker Compose contendo um **backend** (API) e um **frontend** (página web) para alunos iniciantes aprenderem a trabalhar com APIs.

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Docker](https://www.docker.com/get-started) 
- [Docker Compose](https://docs.docker.com/compose/install/) (geralmente vem junto com o Docker)

## 🔧 Passo a Passo

### 1. Clonar o Repositório

```bash
git clone https://github.com/molettta/atividadeApieFront.git
cd atividadeApieFront
```

### 2. Iniciar os Containers

Execute o comando abaixo para iniciar tanto o backend quanto o frontend:

```bash
docker-compose up --build
```

**O que acontece:**
- O Docker vai construir as imagens dos containers
- O backend será iniciado na porta **3000**
- O frontend será iniciado na porta **8080**

### 3. Acessar a Aplicação

Após os containers iniciarem (você verá mensagens no terminal), acesse:

- **Frontend:** http://localhost:8080
- **Backend (API):** http://localhost:3000

### 4. Testar os Endpoints

#### Endpoint 1: Pegar Frutas
- **URL:** http://localhost:3000/pega-frutas
- **Método:** GET
- **Resposta:** Lista de frutas em JSON

#### Endpoint 2: Soma
- **URL:** http://localhost:3000/soma?a=5&b=3
- **Método:** GET
- **Parâmetros:** 
  - `a`: primeiro número
  - `b`: segundo número
- **Exemplo:** http://localhost:3000/soma?a=10&b=20

### 5. Parar os Containers

Para parar os containers, pressione `Ctrl + C` no terminal ou execute:

```bash
docker-compose down
```

## 📁 Estrutura do Projeto

```
atividadeApieFront/
├── backend/          # Código do backend (API)
│   ├── server.js     # Servidor Express
│   ├── package.json  # Dependências Node.js
│   └── Dockerfile    # Configuração Docker do backend
├── frontend/         # Código do frontend
│   ├── index.html    # Página HTML principal
│   └── Dockerfile    # Configuração Docker do frontend
├── docker-compose.yml # Orquestração dos containers
└── inicia.md         # Este arquivo
```

## ✏️ Como Editar o Código

As pastas `backend/` e `frontend/` estão **expostas** (volumes), então você pode editar os arquivos diretamente:

- **Backend:** Edite `backend/server.js` para modificar a API
- **Frontend:** Edite `frontend/index.html` para modificar a interface

**Importante:** 
- O backend usa `nodemon` para recarregar automaticamente quando você salvar alterações
- O frontend usa volumes do Nginx, então você pode precisar recarregar a página no navegador

## 🎯 Exercícios Sugeridos

1. **Adicionar uma nova fruta** no array `frutas` em `backend/server.js`
2. **Criar um novo endpoint** no backend (ex: `/multiplica`)
3. **Adicionar um novo botão** no frontend para chamar o novo endpoint
4. **Modificar o estilo** da página editando o CSS em `frontend/index.html`
5. **Adicionar validação** nos endpoints do backend

## 🐛 Solução de Problemas

### ⚠️ Erro: "The system cannot find the file specified" ou "dockerDesktopLinuxEngine"
**Este é o erro mais comum!** Significa que o **Docker Desktop não está rodando**.

**Solução:**
1. Abra o **Docker Desktop** no Windows
2. Aguarde até aparecer "Docker Desktop is running" na barra de tarefas
3. Verifique se o ícone da baleia do Docker está verde na bandeja do sistema
4. Tente novamente: `docker-compose up --build`

**Como verificar se o Docker está rodando:**
```bash
docker ps
```
Se aparecer uma lista (mesmo que vazia), o Docker está funcionando. Se der erro, o Docker Desktop não está rodando.

### Erro: "Port already in use"
Se a porta 3000 ou 8080 já estiver em uso, você pode alterar as portas no arquivo `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Mude 3000 para 3001 (ou outra porta)
```

### Erro: "Cannot connect to backend"
- Verifique se o backend está rodando: http://localhost:3000
- Verifique se o CORS está habilitado no backend (já está configurado)
- No navegador, abra o Console (F12) para ver erros
- Verifique se o Docker Desktop está rodando (veja erro acima)

### Containers não iniciam
- **Primeiro:** Verifique se o Docker Desktop está rodando (veja primeiro erro acima)
- Execute `docker-compose down` e depois `docker-compose up --build` novamente
- Se persistir, reinicie o Docker Desktop

## 📚 Recursos de Aprendizado

- **Express.js:** Framework Node.js usado no backend
- **Fetch API:** Usado no frontend para fazer requisições HTTP
- **Docker Compose:** Ferramenta para orquestrar múltiplos containers

---

**Bons estudos! 🎓**

