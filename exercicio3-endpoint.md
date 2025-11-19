# 🎯 Exercício 3: Criando Seu Primeiro Endpoint

## 📚 O que você vai aprender?

Neste exercício, você vai aprender a criar um **endpoint** novo no backend. Você vai adicionar uma nova rota que pode ser acessada via Postman ou pelo frontend!

---

## 🤔 O que é um Endpoint?

**Endpoint** = um "ponto de acesso" na API. É como uma "porta" específica que você pode chamar para obter ou enviar informações.

### Analogia Simples:

Imagine uma **pizzaria**:
- **Endpoint `/pega-frutas`** = cardápio de frutas
- **Endpoint `/soma`** = calculadora
- **Endpoint `/meuprimeiroendpoint`** = seu novo serviço!

Cada endpoint tem uma **função específica** e retorna dados diferentes.

### Estrutura de um Endpoint:

```
Método HTTP + Caminho = Endpoint
GET        + /pega-frutas = Endpoint que retorna frutas
GET        + /soma = Endpoint que faz soma
```

---

## 📍 Onde Adicionar um Endpoint?

Todos os endpoints ficam no arquivo **`backend/server.js`**!

### Estrutura do arquivo `server.js`:

```javascript
// 1. IMPORTAÇÕES (topo do arquivo)
const express = require('express');
const cors = require('cors');

// 2. CONFIGURAÇÕES (middlewares)
const app = express();
app.use(cors());
app.use(express.json());

// 3. DADOS (arrays, objetos, etc)
const frutas = [...];

// 4. ENDPOINTS (aqui que você vai adicionar!)
app.get('/pega-frutas', (req, res) => { ... });
app.get('/soma', (req, res) => { ... });
app.get('/', (req, res) => { ... });

// 5. INICIAR SERVIDOR (final do arquivo)
app.listen(PORT, '0.0.0.0', () => { ... });
```

### ⚠️ ONDE ADICIONAR SEU ENDPOINT:

Você deve adicionar **ANTES** da linha `app.listen()` e **DEPOIS** dos outros endpoints existentes.

**Localização ideal:** Entre o endpoint `/soma` e o endpoint `/` (raiz).

---

## 🎯 Exercício: Criar o Endpoint `/meuprimeiroendpoint`

Vamos criar um endpoint simples que retorna uma mensagem de boas-vindas!

### Passo 1: Abrir o arquivo `server.js`

1. Abra o arquivo: `backend/server.js`
2. Localize onde estão os outros endpoints (procure por `app.get(`)

### Passo 2: Encontrar o Local Correto

Procure por esta parte do código:

```javascript
// Endpoint: GET /soma
app.get('/soma', (req, res) => {
  // ... código do endpoint soma ...
});

// Endpoint de teste
app.get('/', (req, res) => {
  // ... código do endpoint raiz ...
});
```

**Você vai adicionar seu endpoint ENTRE esses dois!**

### Passo 3: Adicionar o Novo Endpoint

Adicione este código **depois** do endpoint `/soma` e **antes** do endpoint `/`:

```javascript
// Endpoint: GET /meuprimeiroendpoint
app.get('/meuprimeiroendpoint', (req, res) => {
  res.json({
    sucesso: true,
    mensagem: 'Parabéns! Você criou seu primeiro endpoint! 🎉',
    autor: 'Seu nome aqui',
    data: new Date().toLocaleDateString('pt-BR')
  });
});
```

### Passo 4: Salvar o Arquivo

1. Salve o arquivo (`Ctrl + S`)
2. O nodemon vai **recarregar automaticamente** o servidor!
3. Você deve ver no terminal: `[nodemon] restarting due to changes...`

### Passo 5: Testar no Postman

1. Abra o Postman
2. Crie uma nova requisição **GET**
3. URL: `http://localhost:3000/meuprimeiroendpoint`
4. Clique em **Send**

**Resposta esperada:**
```json
{
  "sucesso": true,
  "mensagem": "Parabéns! Você criou seu primeiro endpoint! 🎉",
  "autor": "Seu nome aqui",
  "data": "19/11/2025"
}
```

### ✅ Parabéns!

Você criou seu primeiro endpoint! 🎉

---

## 📖 Entendendo o Código que Você Adicionou

Vamos quebrar o código linha por linha:

```javascript
// Comentário explicando o endpoint
app.get('/meuprimeiroendpoint', (req, res) => {
```

- `app.get()` = cria um endpoint do tipo GET (para buscar dados)
- `'/meuprimeiroendpoint'` = o caminho/URL do endpoint
- `(req, res) => { ... }` = função que executa quando alguém acessa este endpoint
  - `req` = requisição (dados que o cliente enviou)
  - `res` = resposta (como vamos responder)

```javascript
  res.json({
    sucesso: true,
    mensagem: 'Parabéns! Você criou seu primeiro endpoint! 🎉',
    autor: 'Seu nome aqui',
    data: new Date().toLocaleDateString('pt-BR')
  });
```

- `res.json()` = envia resposta em formato JSON
- `{ ... }` = objeto JavaScript que será convertido para JSON
- `sucesso: true` = indica que deu tudo certo
- `mensagem` = texto personalizado
- `autor` = seu nome (pode mudar!)
- `data` = data atual formatada em português brasileiro
  - `new Date()` = cria objeto com data/hora atual
  - `.toLocaleDateString('pt-BR')` = formata em formato brasileiro (dd/mm/aaaa)

```javascript
});
```

- Fecha a função do endpoint

---

## 🎨 Personalize Seu Endpoint!

Agora que você criou o endpoint, que tal personalizá-lo?

### Ideias para personalizar:

1. **Mude a mensagem:**
   ```javascript
   mensagem: 'Olá! Este é meu primeiro endpoint!'
   ```

2. **Adicione seu nome:**
   ```javascript
   autor: 'Maria Silva'  // Coloque seu nome aqui!
   ```

3. **Adicione mais informações:**
   ```javascript
   res.json({
     sucesso: true,
     mensagem: 'Parabéns! Você criou seu primeiro endpoint! 🎉',
     autor: 'Seu nome aqui',
     data: new Date().toLocaleDateString('pt-BR'),
     hora: new Date().toLocaleTimeString('pt-BR'),  // Adiciona hora!
     curso: 'Desenvolvimento Web'  // Adiciona curso!
   });
   ```

4. **Teste e veja as mudanças no Postman!**

---

## 🔍 Verificando se Funcionou

### Checklist:

- [ ] Adicionei o código no lugar correto (entre `/soma` e `/`)
- [ ] Salvei o arquivo
- [ ] Vi a mensagem do nodemon no terminal (servidor reiniciou)
- [ ] Testei no Postman e recebi resposta JSON
- [ ] A resposta contém `sucesso: true`
- [ ] Personalizei com meu nome

### Se não funcionou:

1. **Verifique se salvou o arquivo** (`Ctrl + S`)
2. **Verifique se o servidor reiniciou** (veja o terminal)
3. **Verifique se digitou a URL correta no Postman:**
   - ✅ Correto: `http://localhost:3000/meuprimeiroendpoint`
   - ❌ Errado: `http://localhost:3000/meu-primeiro-endpoint` (hífens diferentes)
4. **Verifique se não esqueceu vírgulas ou chaves** no código
5. **Veja os erros no terminal** - eles mostram o que está errado!

---

## 📝 Estrutura Completa do Código

Aqui está como deve ficar o arquivo `server.js` após adicionar seu endpoint:

```javascript
// ... código anterior (importações, configurações, dados) ...

// Endpoint: GET /soma
app.get('/soma', (req, res) => {
  // ... código do endpoint soma ...
});

// ============================================
// SEU NOVO ENDPOINT AQUI!
// ============================================
// Endpoint: GET /meuprimeiroendpoint
app.get('/meuprimeiroendpoint', (req, res) => {
  res.json({
    sucesso: true,
    mensagem: 'Parabéns! Você criou seu primeiro endpoint! 🎉',
    autor: 'Seu nome aqui',
    data: new Date().toLocaleDateString('pt-BR')
  });
});

// Endpoint de teste
app.get('/', (req, res) => {
  // ... código do endpoint raiz ...
});

// ... código do app.listen() ...
```

---

## 🎓 Conceitos que Você Aprendeu

### 1. **Endpoint**
- Um ponto de acesso na API
- Formado por: Método HTTP + Caminho
- Exemplo: `GET /meuprimeiroendpoint`

### 2. **Método HTTP GET**
- Usado para **buscar** informações
- Não modifica dados
- Parâmetros opcionais na URL

### 3. **req e res**
- `req` (request) = dados da requisição
- `res` (response) = como responder ao cliente
- `res.json()` = enviar resposta em JSON

### 4. **JSON**
- Formato de dados: `{ "chave": "valor" }`
- Fácil de ler e processar
- Padrão para APIs

### 5. **Nodemon**
- Recarrega o servidor automaticamente quando você salva
- Economiza tempo (não precisa reiniciar manualmente)

---

## 🚀 Desafios Extras (Opcional)

Agora que você sabe criar endpoints, tente estes desafios:

### Desafio 1: Endpoint de Multiplicação
Crie um endpoint `/multiplica` que recebe dois números e retorna a multiplicação.

**Dica:** Use o endpoint `/soma` como referência!

### Desafio 2: Endpoint de Informações
Crie um endpoint `/minhas-informacoes` que retorna:
- Seu nome
- Seu curso
- Data atual
- Uma mensagem motivacional

### Desafio 3: Endpoint com Validação
Crie um endpoint `/divide` que:
- Recebe dois números (`a` e `b`)
- Divide `a` por `b`
- **Validação:** Se `b` for zero, retorna erro (não pode dividir por zero!)

---

## 💡 Dicas Importantes

### ✅ Boas Práticas:

1. **Sempre comente seu código:**
   ```javascript
   // Endpoint: GET /meuprimeiroendpoint
   ```

2. **Use nomes descritivos:**
   - ✅ Bom: `/pega-frutas`, `/minhas-informacoes`
   - ❌ Ruim: `/abc`, `/teste`, `/x`

3. **Sempre retorne `sucesso: true/false`:**
   - Facilita saber se deu certo ou não

4. **Organize os endpoints:**
   - Coloque endpoints relacionados juntos
   - Mantenha uma ordem lógica

### ⚠️ Erros Comuns:

1. **Esquecer vírgulas:**
   ```javascript
   // ❌ Errado (falta vírgula)
   {
     sucesso: true
     mensagem: '...'
   }
   
   // ✅ Correto
   {
     sucesso: true,
     mensagem: '...'
   }
   ```

2. **Esquecer fechar chaves ou parênteses:**
   - Sempre verifique se abriu e fechou tudo!

3. **Erro de digitação na URL:**
   - No Postman, digite exatamente como está no código
   - Case-sensitive (maiúsculas/minúsculas importam!)

---

## 📚 Próximos Passos

Agora que você sabe criar endpoints:

1. ✅ Você pode criar quantos endpoints quiser!
2. ✅ Você entende a estrutura básica de uma API
3. 🎯 **Próximo exercício:** Você vai aprender a chamar esses endpoints do frontend!

---

## 🎉 Parabéns!

Você completou o Exercício 3! Agora você sabe:
- ✅ O que é um endpoint
- ✅ Onde adicionar endpoints no `server.js`
- ✅ Como criar um endpoint simples
- ✅ Como testar no Postman
- ✅ Como personalizar seu endpoint

**Continue praticando e criando novos endpoints!** 🚀

---

## 📋 Solução Completa (Referência)

Aqui está a solução completa caso você precise consultar:

### Código do Endpoint:

```javascript
// Endpoint: GET /meuprimeiroendpoint
app.get('/meuprimeiroendpoint', (req, res) => {
  res.json({
    sucesso: true,
    mensagem: 'Parabéns! Você criou seu primeiro endpoint! 🎉',
    autor: 'Seu nome aqui',
    data: new Date().toLocaleDateString('pt-BR')
  });
});
```

### Onde adicionar:

Adicione **depois** do endpoint `/soma` e **antes** do endpoint `/` (raiz).

### Como testar:

1. Salve o arquivo
2. Abra Postman
3. Método: **GET**
4. URL: `http://localhost:3000/meuprimeiroendpoint`
5. Clique em **Send**

### Resposta esperada:

```json
{
  "sucesso": true,
  "mensagem": "Parabéns! Você criou seu primeiro endpoint! 🎉",
  "autor": "Seu nome aqui",
  "data": "19/11/2025"
}
```

---

**Bons estudos! 📖✨**

