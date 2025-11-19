# 🍎 Exercício 2: Adicionando e Removendo Frutas

## 📚 O que você vai aprender?

Neste exercício, você vai aprender a criar endpoints que **modificam dados**! Você vai criar endpoints para:
- ✅ **Adicionar** uma nova fruta (método POST)
- ✅ **Remover** uma fruta (método DELETE)

Até agora você só usou **GET** (buscar dados). Agora vai usar **POST** (criar) e **DELETE** (deletar)!

---

## 🤔 Métodos HTTP: GET, POST, DELETE

### O que são Métodos HTTP?

Métodos HTTP são "verbos" que indicam **o que você quer fazer** com os dados:

| Método | O que faz | Exemplo |
|--------|-----------|---------|
| **GET** | Buscar/Ler dados | Ver lista de frutas |
| **POST** | Criar/Adicionar dados | Adicionar nova fruta |
| **PUT** | Atualizar dados completos | Atualizar uma fruta |
| **PATCH** | Atualizar parte dos dados | Atualizar só a cor |
| **DELETE** | Deletar/Remover dados | Remover uma fruta |

### Analogia Simples:

Imagine uma **biblioteca**:
- **GET** = ler um livro (não modifica nada)
- **POST** = adicionar um livro novo na estante
- **DELETE** = remover um livro da estante

---

## 📍 Onde Adicionar os Endpoints?

Todos os endpoints ficam no arquivo **`backend/server.js`**!

### Localização:

Adicione os novos endpoints **depois** do endpoint `/pega-frutas` e **antes** do endpoint `/soma`.

---

## 🎯 Parte 1: Adicionar Fruta (POST)

Vamos criar um endpoint que permite adicionar uma nova fruta na lista!

### Passo 1: Entender o Array de Frutas

Primeiro, vamos ver como as frutas estão armazenadas. Abra `backend/server.js` e encontre:

```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 2, nome: 'Banana', cor: 'Amarela' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Uva', cor: 'Roxa' },
  { id: 5, nome: 'Morango', cor: 'Vermelha' },
];
```

Cada fruta tem:
- `id`: número único (1, 2, 3, ...)
- `nome`: nome da fruta (texto)
- `cor`: cor da fruta (texto)

### Passo 2: Adicionar o Endpoint POST

Adicione este código **depois** do endpoint `/pega-frutas`:

```javascript
// Endpoint: POST /adiciona-fruta
// POST = método para CRIAR/ADICIONAR dados
app.post('/adiciona-fruta', (req, res) => {
  // req.body = dados enviados pelo cliente (no corpo da requisição)
  // O cliente vai enviar: { nome: 'Abacaxi', cor: 'Amarela' }
  const { nome, cor } = req.body;

  // Validação: verificar se nome e cor foram enviados
  if (!nome || !cor) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Por favor, envie nome e cor da fruta!'
    });
  }

  // Criar nova fruta
  // Precisamos gerar um ID único (pegar o maior ID e somar 1)
  const novoId = frutas.length > 0 
    ? Math.max(...frutas.map(f => f.id)) + 1 
    : 1;

  const novaFruta = {
    id: novoId,
    nome: nome,
    cor: cor
  };

  // Adicionar a fruta no array
  frutas.push(novaFruta);

  // Retornar sucesso com a fruta criada
  res.status(201).json({
    sucesso: true,
    mensagem: 'Fruta adicionada com sucesso!',
    fruta: novaFruta
  });
});
```

### Passo 3: Entender o Código

Vamos quebrar o código:

```javascript
app.post('/adiciona-fruta', (req, res) => {
```
- `app.post()` = cria endpoint do tipo POST (para criar dados)
- `'/adiciona-fruta'` = caminho do endpoint

```javascript
  const { nome, cor } = req.body;
```
- `req.body` = dados enviados no corpo da requisição (não na URL!)
- `{ nome, cor }` = desestruturação (pega nome e cor do objeto)
- É como fazer: `const nome = req.body.nome; const cor = req.body.cor;`

```javascript
  if (!nome || !cor) {
    return res.status(400).json({ ... });
  }
```
- Validação: se nome ou cor estiverem vazios, retorna erro 400

```javascript
  const novoId = frutas.length > 0 
    ? Math.max(...frutas.map(f => f.id)) + 1 
    : 1;
```
- Gera um ID único: pega o maior ID existente e soma 1
- Se não houver frutas, começa com ID 1

```javascript
  frutas.push(novaFruta);
```
- `push()` = adiciona item no final do array
- Adiciona a nova fruta na lista

```javascript
  res.status(201).json({ ... });
```
- `status(201)` = código HTTP 201 = "Created" (criado com sucesso)
- Retorna a fruta criada

### Passo 4: Testar no Postman

1. **Abra o Postman**
2. **Crie nova requisição**
3. **Método:** Selecione **POST** (não GET!)
4. **URL:** `http://localhost:3000/adiciona-fruta`
5. **Body (Corpo da requisição):**
   - Clique na aba **"Body"**
   - Selecione **"raw"**
   - No dropdown ao lado, selecione **"JSON"**
   - Digite:
     ```json
     {
       "nome": "Abacaxi",
       "cor": "Amarela"
     }
     ```
6. **Clique em "Send"**

**Resposta esperada:**
```json
{
  "sucesso": true,
  "mensagem": "Fruta adicionada com sucesso!",
  "fruta": {
    "id": 6,
    "nome": "Abacaxi",
    "cor": "Amarela"
  }
}
```

### Passo 5: Verificar se Foi Adicionada

Teste o endpoint `/pega-frutas` novamente e veja se a nova fruta apareceu!

---

## 🗑️ Parte 2: Remover Fruta (DELETE)

Agora vamos criar um endpoint para remover uma fruta pelo ID!

### Passo 1: Adicionar o Endpoint DELETE

Adicione este código **depois** do endpoint `/adiciona-fruta`:

```javascript
// Endpoint: DELETE /remove-fruta/:id
// DELETE = método para REMOVER/DELETAR dados
// :id = parâmetro dinâmico (o ID da fruta a ser removida)
app.delete('/remove-fruta/:id', (req, res) => {
  // req.params = parâmetros da URL
  // Se a URL for /remove-fruta/3, então req.params.id = "3"
  const id = parseInt(req.params.id);

  // Validação: verificar se o ID é um número válido
  if (isNaN(id)) {
    return res.status(400).json({
      sucesso: false,
      erro: 'ID inválido! Envie um número.'
    });
  }

  // Procurar a fruta no array pelo ID
  // findIndex() = encontra o índice (posição) da fruta no array
  const indice = frutas.findIndex(fruta => fruta.id === id);

  // Se não encontrou (indice = -1), retorna erro
  if (indice === -1) {
    return res.status(404).json({
      sucesso: false,
      erro: `Fruta com ID ${id} não encontrada!`
    });
  }

  // Remover a fruta do array
  // splice() = remove item do array na posição indicada
  const frutaRemovida = frutas.splice(indice, 1)[0];

  // Retornar sucesso
  res.json({
    sucesso: true,
    mensagem: 'Fruta removida com sucesso!',
    fruta: frutaRemovida
  });
});
```

### Passo 2: Entender o Código

```javascript
app.delete('/remove-fruta/:id', (req, res) => {
```
- `app.delete()` = cria endpoint do tipo DELETE
- `:id` = parâmetro dinâmico na URL
- Exemplo: `/remove-fruta/3` → `req.params.id = "3"`

```javascript
  const id = parseInt(req.params.id);
```
- `parseInt()` = converte texto para número
- `"3"` vira `3`

```javascript
  const indice = frutas.findIndex(fruta => fruta.id === id);
```
- `findIndex()` = procura no array e retorna a posição (índice)
- Se não encontrar, retorna `-1`

```javascript
  const frutaRemovida = frutas.splice(indice, 1)[0];
```
- `splice(indice, 1)` = remove 1 item na posição `indice`
- `[0]` = pega o primeiro (e único) item removido

### Passo 3: Testar no Postman

1. **Abra o Postman**
2. **Crie nova requisição**
3. **Método:** Selecione **DELETE**
4. **URL:** `http://localhost:3000/remove-fruta/1`
   - O `1` no final é o ID da fruta a ser removida
   - Tente remover a fruta com ID 1 (Maçã)
5. **Clique em "Send"**

**Resposta esperada:**
```json
{
  "sucesso": true,
  "mensagem": "Fruta removida com sucesso!",
  "fruta": {
    "id": 1,
    "nome": "Maçã",
    "cor": "Vermelha"
  }
}
```

### Passo 4: Verificar se Foi Removida

Teste o endpoint `/pega-frutas` novamente e veja se a fruta foi removida!

### Passo 5: Testar Erro

Tente remover uma fruta que não existe:
- URL: `http://localhost:3000/remove-fruta/999`
- Deve retornar erro 404!

---

## 📝 Estrutura Completa do Código

Aqui está como deve ficar a ordem dos endpoints no `server.js`:

```javascript
// ... código anterior (importações, configurações, dados) ...

// Endpoint: GET /pega-frutas
app.get('/pega-frutas', (req, res) => {
  // ... código existente ...
});

// ============================================
// SEUS NOVOS ENDPOINTS AQUI!
// ============================================

// Endpoint: POST /adiciona-fruta
app.post('/adiciona-fruta', (req, res) => {
  // ... código do POST ...
});

// Endpoint: DELETE /remove-fruta/:id
app.delete('/remove-fruta/:id', (req, res) => {
  // ... código do DELETE ...
});

// Endpoint: GET /soma
app.get('/soma', (req, res) => {
  // ... código existente ...
});

// ... resto do código ...
```

---

## 🎓 Conceitos que Você Aprendeu

### 1. **Método POST**
- Usado para **criar/adicionar** dados
- Dados vão no **corpo da requisição** (body), não na URL
- Status code: `201 Created` (sucesso)

### 2. **Método DELETE**
- Usado para **remover/deletar** dados
- ID vai na **URL** como parâmetro (`:id`)
- Status code: `200 OK` ou `204 No Content` (sucesso)

### 3. **req.body**
- Dados enviados no corpo da requisição (POST, PUT, PATCH)
- Precisa do middleware `express.json()` para funcionar

### 4. **req.params**
- Parâmetros dinâmicos na URL
- Exemplo: `/remove-fruta/:id` → `req.params.id`

### 5. **Array Methods**
- `push()` = adiciona item no final
- `splice()` = remove item(s) do array
- `findIndex()` = encontra posição de um item

### 6. **Status Codes HTTP**
- `200` = OK (sucesso)
- `201` = Created (criado com sucesso)
- `400` = Bad Request (erro do cliente)
- `404` = Not Found (não encontrado)

---

## 🔍 Verificando se Funcionou

### Checklist:

- [ ] Adicionei o endpoint POST `/adiciona-fruta`
- [ ] Adicionei o endpoint DELETE `/remove-fruta/:id`
- [ ] Salvei o arquivo
- [ ] Vi a mensagem do nodemon (servidor reiniciou)
- [ ] Testei POST no Postman e adicionei uma fruta
- [ ] Verifiquei que a fruta apareceu em `/pega-frutas`
- [ ] Testei DELETE no Postman e removi uma fruta
- [ ] Verifiquei que a fruta foi removida de `/pega-frutas`
- [ ] Testei remover fruta inexistente (vi o erro 404)

---

## 🚀 Desafios Extras (Opcional)

### Desafio 1: Endpoint para Atualizar Fruta
Crie um endpoint `PUT /atualiza-fruta/:id` que:
- Recebe `nome` e `cor` no body
- Atualiza a fruta com o ID especificado
- Retorna a fruta atualizada

### Desafio 2: Validação de Nome Único
Modifique o endpoint POST para:
- Verificar se já existe uma fruta com o mesmo nome
- Se existir, retornar erro (não permite duplicatas)

### Desafio 3: Endpoint para Buscar Fruta por ID
Crie um endpoint `GET /fruta/:id` que:
- Retorna apenas a fruta com o ID especificado
- Se não encontrar, retorna erro 404

---

## 💡 Dicas Importantes

### ✅ Boas Práticas:

1. **Sempre valide os dados:**
   - Verifique se os campos obrigatórios foram enviados
   - Verifique se os tipos estão corretos

2. **Use status codes apropriados:**
   - `201` para criação
   - `200` para sucesso geral
   - `400` para erro do cliente
   - `404` para não encontrado

3. **Retorne informações úteis:**
   - Sempre retorne o objeto criado/removido
   - Mensagens de erro claras

### ⚠️ Erros Comuns:

1. **Esquecer de selecionar JSON no Postman:**
   - Sempre selecione "JSON" na aba Body!

2. **Enviar dados errados no body:**
   - POST precisa de body com JSON
   - DELETE não precisa de body (ID vai na URL)

3. **Esquecer de converter ID para número:**
   - `req.params.id` vem como texto ("3")
   - Use `parseInt()` para converter

---

## 📋 Solução Completa (Referência)

### Código do Endpoint POST:

```javascript
// Endpoint: POST /adiciona-fruta
app.post('/adiciona-fruta', (req, res) => {
  const { nome, cor } = req.body;

  if (!nome || !cor) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Por favor, envie nome e cor da fruta!'
    });
  }

  const novoId = frutas.length > 0 
    ? Math.max(...frutas.map(f => f.id)) + 1 
    : 1;

  const novaFruta = {
    id: novoId,
    nome: nome,
    cor: cor
  };

  frutas.push(novaFruta);

  res.status(201).json({
    sucesso: true,
    mensagem: 'Fruta adicionada com sucesso!',
    fruta: novaFruta
  });
});
```

### Código do Endpoint DELETE:

```javascript
// Endpoint: DELETE /remove-fruta/:id
app.delete('/remove-fruta/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      sucesso: false,
      erro: 'ID inválido! Envie um número.'
    });
  }

  const indice = frutas.findIndex(fruta => fruta.id === id);

  if (indice === -1) {
    return res.status(404).json({
      sucesso: false,
      erro: `Fruta com ID ${id} não encontrada!`
    });
  }

  const frutaRemovida = frutas.splice(indice, 1)[0];

  res.json({
    sucesso: true,
    mensagem: 'Fruta removida com sucesso!',
    fruta: frutaRemovida
  });
});
```

### Como testar no Postman:

**POST /adiciona-fruta:**
- Método: POST
- URL: `http://localhost:3000/adiciona-fruta`
- Body (JSON):
  ```json
  {
    "nome": "Abacaxi",
    "cor": "Amarela"
  }
  ```

**DELETE /remove-fruta/:id:**
- Método: DELETE
- URL: `http://localhost:3000/remove-fruta/1`
- (Não precisa de body)

---

## 🎉 Parabéns!

Você completou o Exercício 2! Agora você sabe:
- ✅ O que são métodos HTTP (GET, POST, DELETE)
- ✅ Como criar endpoints POST (adicionar dados)
- ✅ Como criar endpoints DELETE (remover dados)
- ✅ Como usar `req.body` e `req.params`
- ✅ Como trabalhar com arrays (push, splice, findIndex)
- ✅ Como validar dados
- ✅ Como usar status codes HTTP

**Continue praticando!** 🚀

---

**Bons estudos! 📖✨**

