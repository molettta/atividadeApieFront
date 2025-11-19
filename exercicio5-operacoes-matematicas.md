# 🧮 Exercício 5: Operações Matemáticas (Multiplicação, Divisão e Subtração)

## 📚 O que você vai aprender?

Neste exercício, você vai implementar **multiplicação, divisão e subtração** tanto no **backend** quanto no **frontend**, seguindo o mesmo padrão da **soma** que já existe!

Você vai aprender a:
- ✅ Criar novos endpoints no backend
- ✅ Criar novas funções no frontend
- ✅ Conectar tudo funcionando

---

## 🎯 Objetivo

Implementar 3 novas operações matemáticas:
1. **Multiplicação** (`/multiplica`)
2. **Divisão** (`/divide`)
3. **Subtração** (`/subtrai`)

---

## 📖 Referência: Como a Soma Funciona

Antes de começar, vamos entender como a **soma** já funciona. Use isso como **referência** para implementar as outras operações!

### Backend - Endpoint de Soma

No arquivo `backend/server.js`, encontre o endpoint `/soma`:

```javascript
// Endpoint: GET /soma
// Exemplo: /soma?a=5&b=3
app.get('/soma', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Parâmetros inválidos. Use: /soma?a=5&b=3'
    });
  }

  const resultado = a + b;

  res.json({
    sucesso: true,
    a: a,
    b: b,
    resultado: resultado
  });
});
```

**O que este código faz:**
1. Recebe dois parâmetros `a` e `b` da URL (query parameters)
2. Converte para números com `parseFloat()`
3. Valida se são números válidos
4. Faz a operação: `a + b`
5. Retorna o resultado em JSON

### Frontend - Função de Soma

No arquivo `frontend/index.html`, encontre a função `calcularSoma()`:

```javascript
// Função para calcular soma
async function calcularSoma() {
  const resultadoDiv = document.getElementById('resultado-soma');
  const a = document.getElementById('numero-a').value;
  const b = document.getElementById('numero-b').value;

  if (!a || !b) {
    resultadoDiv.innerHTML = '<p class="erro">Por favor, preencha ambos os números!</p>';
    return;
  }

  resultadoDiv.innerHTML = '<p class="loading">Calculando...</p>';

  try {
    const response = await fetch(`${API_URL_PUBLIC}/soma?a=${a}&b=${b}`);
    const data = await response.json();

    if (data.sucesso) {
      resultadoDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>${data.a} + ${data.b} = ${data.resultado}</strong></p>
      `;
    } else {
      resultadoDiv.innerHTML = `<p class="erro">${data.erro}</p>`;
    }
  } catch (error) {
    resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}. Verifique se o backend está rodando!</p>`;
  }
}
```

**O que este código faz:**
1. Pega os valores dos inputs (`numero-a` e `numero-b`)
2. Valida se estão preenchidos
3. Mostra "Calculando..." enquanto processa
4. Faz requisição para `/soma?a=X&b=Y`
5. Exibe o resultado na tela

### HTML - Seção de Soma

No arquivo `frontend/index.html`, encontre a seção de soma:

```html
<div class="section">
  <h2>2. Soma de Números</h2>
  <input type="number" id="numero-a" placeholder="Número A" value="5">
  <input type="number" id="numero-b" placeholder="Número B" value="3">
  <button onclick="calcularSoma()">Calcular Soma</button>
  <div id="resultado-soma"></div>
</div>
```

**O que este código faz:**
1. Cria dois inputs para os números
2. Cria um botão que chama `calcularSoma()`
3. Cria uma div para mostrar o resultado

---

## 🎯 Sua Missão: Implementar as 3 Operações

Agora é sua vez! Você vai criar:

### 1. Multiplicação
- Backend: endpoint `/multiplica`
- Frontend: função `calcularMultiplicacao()`
- HTML: seção com inputs e botão

### 2. Divisão
- Backend: endpoint `/divide`
- Frontend: função `calcularDivisao()`
- HTML: seção com inputs e botão
- **Importante:** Validar divisão por zero!

### 3. Subtração
- Backend: endpoint `/subtrai`
- Frontend: função `calcularSubtracao()`
- HTML: seção com inputs e botão

---

## 📝 Parte 1: Backend - Criar os Endpoints

### Passo 1: Abrir `backend/server.js`

1. Abra o arquivo: `backend/server.js`
2. Localize o endpoint `/soma`
3. Você vai adicionar os novos endpoints **depois** do `/soma`

### Passo 2: Endpoint de Multiplicação

Adicione este código **depois** do endpoint `/soma`:

```javascript
// Endpoint: GET /multiplica
// Exemplo: /multiplica?a=5&b=3
app.get('/multiplica', (req, res) => {
  // TODO: Implemente seguindo o padrão da soma
  // Dica: Use a * b ao invés de a + b
});
```

**Sua tarefa:** Complete o código seguindo o padrão da soma, mas usando `*` (multiplicação) ao invés de `+`.

### Passo 3: Endpoint de Divisão

Adicione este código **depois** do endpoint `/multiplica`:

```javascript
// Endpoint: GET /divide
// Exemplo: /divide?a=10&b=2
app.get('/divide', (req, res) => {
  // TODO: Implemente seguindo o padrão da soma
  // Dica: Use a / b ao invés de a + b
  // IMPORTANTE: Valide se b é zero! (não pode dividir por zero)
});
```

**Sua tarefa:** 
- Complete o código seguindo o padrão da soma, mas usando `/` (divisão)
- **Adicione validação:** Se `b === 0`, retorne erro: "Não é possível dividir por zero!"

### Passo 4: Endpoint de Subtração

Adicione este código **depois** do endpoint `/divide`:

```javascript
// Endpoint: GET /subtrai
// Exemplo: /subtrai?a=10&b=3
app.get('/subtrai', (req, res) => {
  // TODO: Implemente seguindo o padrão da soma
  // Dica: Use a - b ao invés de a + b
});
```

**Sua tarefa:** Complete o código seguindo o padrão da soma, mas usando `-` (subtração).

---

## 🎨 Parte 2: Frontend - Criar as Funções JavaScript

### Passo 1: Abrir `frontend/index.html`

1. Abra o arquivo: `frontend/index.html`
2. Localize a função `calcularSoma()`
3. Você vai adicionar as novas funções **depois** de `calcularSoma()`

### Passo 2: Função de Multiplicação

Adicione este código **depois** da função `calcularSoma()`:

```javascript
// Função para calcular multiplicação
async function calcularMultiplicacao() {
  // TODO: Implemente seguindo o padrão de calcularSoma()
  // Dica: 
  // - Use IDs diferentes: numero-a-mult, numero-b-mult
  // - Chame o endpoint: /multiplica
  // - Mostre: a * b = resultado
}
```

**Sua tarefa:** Complete a função seguindo o padrão de `calcularSoma()`, mas:
- Use IDs diferentes para os inputs (ex: `numero-a-mult`, `numero-b-mult`)
- Chame o endpoint `/multiplica`
- Mostre o resultado com `*` ao invés de `+`

### Passo 3: Função de Divisão

Adicione este código **depois** da função `calcularMultiplicacao()`:

```javascript
// Função para calcular divisão
async function calcularDivisao() {
  // TODO: Implemente seguindo o padrão de calcularSoma()
  // Dica:
  // - Use IDs diferentes: numero-a-div, numero-b-div
  // - Chame o endpoint: /divide
  // - Mostre: a / b = resultado
}
```

**Sua tarefa:** Complete a função seguindo o padrão de `calcularSoma()`, mas:
- Use IDs diferentes para os inputs (ex: `numero-a-div`, `numero-b-div`)
- Chame o endpoint `/divide`
- Mostre o resultado com `/` ao invés de `+`

### Passo 4: Função de Subtração

Adicione este código **depois** da função `calcularDivisao()`:

```javascript
// Função para calcular subtração
async function calcularSubtracao() {
  // TODO: Implemente seguindo o padrão de calcularSoma()
  // Dica:
  // - Use IDs diferentes: numero-a-sub, numero-b-sub
  // - Chame o endpoint: /subtrai
  // - Mostre: a - b = resultado
}
```

**Sua tarefa:** Complete a função seguindo o padrão de `calcularSoma()`, mas:
- Use IDs diferentes para os inputs (ex: `numero-a-sub`, `numero-b-sub`)
- Chame o endpoint `/subtrai`
- Mostre o resultado com `-` ao invés de `+`

---

## 🎨 Parte 3: Frontend - Criar as Seções HTML

### Passo 1: Localizar a Seção de Soma

No arquivo `frontend/index.html`, encontre a seção de soma (procure por `<div class="section">` com "Soma de Números").

### Passo 2: Seção de Multiplicação

Adicione esta seção **depois** da seção de Soma:

```html
<!-- Seção: Multiplicação -->
<div class="section">
  <h2>4. Multiplicação de Números</h2>
  <!-- TODO: Adicione os inputs e botão seguindo o padrão da soma -->
  <!-- Dica: Use IDs: numero-a-mult, numero-b-mult -->
  <!-- Botão: onclick="calcularMultiplicacao()" -->
  <!-- Div resultado: id="resultado-multiplicacao" -->
</div>
```

**Sua tarefa:** Complete o HTML seguindo o padrão da soma, mas:
- Título: "4. Multiplicação de Números"
- IDs dos inputs: `numero-a-mult`, `numero-b-mult`
- Botão: `onclick="calcularMultiplicacao()"`
- Div resultado: `id="resultado-multiplicacao"`

### Passo 3: Seção de Divisão

Adicione esta seção **depois** da seção de Multiplicação:

```html
<!-- Seção: Divisão -->
<div class="section">
  <h2>5. Divisão de Números</h2>
  <!-- TODO: Adicione os inputs e botão seguindo o padrão da soma -->
  <!-- Dica: Use IDs: numero-a-div, numero-b-div -->
  <!-- Botão: onclick="calcularDivisao()" -->
  <!-- Div resultado: id="resultado-divisao" -->
</div>
```

**Sua tarefa:** Complete o HTML seguindo o padrão da soma, mas:
- Título: "5. Divisão de Números"
- IDs dos inputs: `numero-a-div`, `numero-b-div`
- Botão: `onclick="calcularDivisao()"`
- Div resultado: `id="resultado-divisao"`

### Passo 4: Seção de Subtração

Adicione esta seção **depois** da seção de Divisão:

```html
<!-- Seção: Subtração -->
<div class="section">
  <h2>6. Subtração de Números</h2>
  <!-- TODO: Adicione os inputs e botão seguindo o padrão da soma -->
  <!-- Dica: Use IDs: numero-a-sub, numero-b-sub -->
  <!-- Botão: onclick="calcularSubtracao()" -->
  <!-- Div resultado: id="resultado-subtracao" -->
</div>
```

**Sua tarefa:** Complete o HTML seguindo o padrão da soma, mas:
- Título: "6. Subtração de Números"
- IDs dos inputs: `numero-a-sub`, `numero-b-sub`
- Botão: `onclick="calcularSubtracao()"`
- Div resultado: `id="resultado-subtracao"`

---

## ✅ Checklist de Verificação

### Backend:

- [ ] Endpoint `/multiplica` criado e funcionando
- [ ] Endpoint `/divide` criado e funcionando (com validação de divisão por zero)
- [ ] Endpoint `/subtrai` criado e funcionando
- [ ] Testei todos os endpoints no Postman
- [ ] Validação de divisão por zero retorna erro correto

### Frontend:

- [ ] Função `calcularMultiplicacao()` implementada
- [ ] Função `calcularDivisao()` implementada
- [ ] Função `calcularSubtracao()` implementada
- [ ] Seção HTML de Multiplicação criada
- [ ] Seção HTML de Divisão criada
- [ ] Seção HTML de Subtração criada
- [ ] Testei todas as operações na página
- [ ] Resultados aparecem corretamente na tela

---

## 🧪 Como Testar

### 1. Testar no Postman (Backend)

Teste cada endpoint:

**Multiplicação:**
- GET `http://localhost:3000/multiplica?a=5&b=3`
- Deve retornar: `{ "resultado": 15 }`

**Divisão:**
- GET `http://localhost:3000/divide?a=10&b=2`
- Deve retornar: `{ "resultado": 5 }`
- Teste erro: `http://localhost:3000/divide?a=10&b=0`
- Deve retornar erro!

**Subtração:**
- GET `http://localhost:3000/subtrai?a=10&b=3`
- Deve retornar: `{ "resultado": 7 }`

### 2. Testar no Navegador (Frontend)

1. Abra: http://localhost:8080
2. Teste cada seção:
   - Preencha os números
   - Clique no botão
   - Veja o resultado aparecer

---

## 💡 Dicas Importantes

### Backend:

1. **Operadores Matemáticos:**
   - Soma: `+`
   - Subtração: `-`
   - Multiplicação: `*`
   - Divisão: `/`

2. **Validação de Divisão por Zero:**
   ```javascript
   if (b === 0) {
     return res.status(400).json({
       sucesso: false,
       erro: 'Não é possível dividir por zero!'
     });
   }
   ```

3. **Siga o padrão da soma:**
   - Mesma estrutura
   - Mesmas validações
   - Mesmo formato de resposta

### Frontend:

1. **IDs únicos:**
   - Cada seção precisa de IDs diferentes
   - Exemplo: `numero-a-mult`, `numero-b-mult`

2. **Nomes de funções:**
   - Use nomes descritivos
   - Exemplo: `calcularMultiplicacao()`

3. **Símbolos na exibição:**
   - Soma: `+`
   - Subtração: `-`
   - Multiplicação: `*`
   - Divisão: `/`

---

## 🐛 Problemas Comuns

### ❌ "Erro: Cannot read property 'value' of null"
**Causa:** ID do input está errado ou não existe
**Solução:** Verifique se o ID no JavaScript corresponde ao ID no HTML

### ❌ "Erro 404 Not Found"
**Causa:** Endpoint não existe ou URL está errada
**Solução:** Verifique se o endpoint foi criado no backend e se a URL está correta

### ❌ Divisão por zero não retorna erro
**Causa:** Validação não foi implementada
**Solução:** Adicione a validação `if (b === 0)` no endpoint de divisão

### ❌ Resultado não aparece na tela
**Causa:** ID da div de resultado está errado
**Solução:** Verifique se o ID no JavaScript corresponde ao ID no HTML

---

## 📋 Solução de Referência (Se Precisar)

<details>
<summary>Clique para ver a solução completa (só se realmente precisar!)</summary>

### Backend - Endpoint Multiplicação:

```javascript
app.get('/multiplica', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Parâmetros inválidos. Use: /multiplica?a=5&b=3'
    });
  }

  const resultado = a * b;

  res.json({
    sucesso: true,
    a: a,
    b: b,
    resultado: resultado
  });
});
```

### Backend - Endpoint Divisão:

```javascript
app.get('/divide', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Parâmetros inválidos. Use: /divide?a=10&b=2'
    });
  }

  if (b === 0) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Não é possível dividir por zero!'
    });
  }

  const resultado = a / b;

  res.json({
    sucesso: true,
    a: a,
    b: b,
    resultado: resultado
  });
});
```

### Backend - Endpoint Subtração:

```javascript
app.get('/subtrai', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Parâmetros inválidos. Use: /subtrai?a=10&b=3'
    });
  }

  const resultado = a - b;

  res.json({
    sucesso: true,
    a: a,
    b: b,
    resultado: resultado
  });
});
```

### Frontend - Função Multiplicação:

```javascript
async function calcularMultiplicacao() {
  const resultadoDiv = document.getElementById('resultado-multiplicacao');
  const a = document.getElementById('numero-a-mult').value;
  const b = document.getElementById('numero-b-mult').value;

  if (!a || !b) {
    resultadoDiv.innerHTML = '<p class="erro">Por favor, preencha ambos os números!</p>';
    return;
  }

  resultadoDiv.innerHTML = '<p class="loading">Calculando...</p>';

  try {
    const response = await fetch(`${API_URL_PUBLIC}/multiplica?a=${a}&b=${b}`);
    const data = await response.json();

    if (data.sucesso) {
      resultadoDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>${data.a} × ${data.b} = ${data.resultado}</strong></p>
      `;
    } else {
      resultadoDiv.innerHTML = `<p class="erro">${data.erro}</p>`;
    }
  } catch (error) {
    resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}. Verifique se o backend está rodando!</p>`;
  }
}
```

### Frontend - Função Divisão:

```javascript
async function calcularDivisao() {
  const resultadoDiv = document.getElementById('resultado-divisao');
  const a = document.getElementById('numero-a-div').value;
  const b = document.getElementById('numero-b-div').value;

  if (!a || !b) {
    resultadoDiv.innerHTML = '<p class="erro">Por favor, preencha ambos os números!</p>';
    return;
  }

  resultadoDiv.innerHTML = '<p class="loading">Calculando...</p>';

  try {
    const response = await fetch(`${API_URL_PUBLIC}/divide?a=${a}&b=${b}`);
    const data = await response.json();

    if (data.sucesso) {
      resultadoDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>${data.a} ÷ ${data.b} = ${data.resultado}</strong></p>
      `;
    } else {
      resultadoDiv.innerHTML = `<p class="erro">${data.erro}</p>`;
    }
  } catch (error) {
    resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}. Verifique se o backend está rodando!</p>`;
  }
}
```

### Frontend - Função Subtração:

```javascript
async function calcularSubtracao() {
  const resultadoDiv = document.getElementById('resultado-subtracao');
  const a = document.getElementById('numero-a-sub').value;
  const b = document.getElementById('numero-b-sub').value;

  if (!a || !b) {
    resultadoDiv.innerHTML = '<p class="erro">Por favor, preencha ambos os números!</p>';
    return;
  }

  resultadoDiv.innerHTML = '<p class="loading">Calculando...</p>';

  try {
    const response = await fetch(`${API_URL_PUBLIC}/subtrai?a=${a}&b=${b}`);
    const data = await response.json();

    if (data.sucesso) {
      resultadoDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>${data.a} - ${data.b} = ${data.resultado}</strong></p>
      `;
    } else {
      resultadoDiv.innerHTML = `<p class="erro">${data.erro}</p>`;
    }
  } catch (error) {
    resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}. Verifique se o backend está rodando!</p>`;
  }
}
```

### HTML - Seção Multiplicação:

```html
<div class="section">
  <h2>4. Multiplicação de Números</h2>
  <input type="number" id="numero-a-mult" placeholder="Número A" value="5">
  <input type="number" id="numero-b-mult" placeholder="Número B" value="3">
  <button onclick="calcularMultiplicacao()">Calcular Multiplicação</button>
  <div id="resultado-multiplicacao"></div>
</div>
```

### HTML - Seção Divisão:

```html
<div class="section">
  <h2>5. Divisão de Números</h2>
  <input type="number" id="numero-a-div" placeholder="Número A" value="10">
  <input type="number" id="numero-b-div" placeholder="Número B" value="2">
  <button onclick="calcularDivisao()">Calcular Divisão</button>
  <div id="resultado-divisao"></div>
</div>
```

### HTML - Seção Subtração:

```html
<div class="section">
  <h2>6. Subtração de Números</h2>
  <input type="number" id="numero-a-sub" placeholder="Número A" value="10">
  <input type="number" id="numero-b-sub" placeholder="Número B" value="3">
  <button onclick="calcularSubtracao()">Calcular Subtração</button>
  <div id="resultado-subtracao"></div>
</div>
```

</details>

---

## 🎉 Parabéns!

Quando você completar este exercício, você terá:
- ✅ Criado 3 novos endpoints no backend
- ✅ Implementado 3 novas funções no frontend
- ✅ Adicionado 3 novas seções na página
- ✅ Aprendido a seguir padrões de código
- ✅ Praticado validação de dados

**Continue praticando e experimentando!** 🚀

---

**Bons estudos! 📖✨**

