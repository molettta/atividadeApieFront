# 🎨 Exercício 4: Frontend Chamando a API

## 📚 O que você vai aprender?

Neste exercício, você vai aprender a fazer o **frontend** (página HTML) chamar o **backend** (API) usando JavaScript! Você vai criar uma nova seção na página que, quando clicada, mostra a mensagem que vem do seu endpoint `/meuprimeiroendpoint`.

---

## 🤔 Como o Frontend e Backend se Comunicam?

### Fluxo Completo:

```
1. Usuário clica no botão (Frontend)
   ↓
2. JavaScript faz requisição HTTP (fetch)
   ↓
3. Backend recebe a requisição (server.js)
   ↓
4. Backend processa e retorna resposta (JSON)
   ↓
5. Frontend recebe a resposta
   ↓
6. JavaScript atualiza a página (mostra o resultado)
   ↓
7. Usuário vê o resultado na tela
```

### O que você vai fazer:

Você vai adicionar uma **terceira seção** na página que chama o endpoint `/meuprimeiroendpoint` que você criou no Exercício 3!

---

## 📍 Onde Adicionar o Código?

Você vai editar o arquivo: **`frontend/index.html`**

### Estrutura do arquivo:

O arquivo tem 3 partes principais:
1. **HTML** - estrutura da página (botões, divs, etc)
2. **CSS** - estilos (cores, tamanhos, etc)
3. **JavaScript** - lógica (funções que fazem as requisições)

---

## 🎯 Passo a Passo: Adicionar Nova Seção

### Passo 1: Abrir o arquivo `index.html`

1. Abra o arquivo: `frontend/index.html`
2. Localize as seções existentes (procure por `<div class="section">`)

### Passo 2: Encontrar onde estão as seções

Você deve ver algo assim:

```html
<!-- Seção: Carregar Frutas -->
<div class="section">
  <h2>1. Carregar Frutas</h2>
  <button onclick="carregarFrutas()">Carregar Frutas</button>
  <div id="resultado-frutas"></div>
</div>

<!-- Seção: Soma -->
<div class="section">
  <h2>2. Soma de Números</h2>
  <!-- ... código da soma ... -->
  <div id="resultado-soma"></div>
</div>
```

### Passo 3: Adicionar a Nova Seção HTML

Adicione esta nova seção **depois** da seção de Soma e **antes** do fechamento do `</div>` do container:

```html
<!-- Seção: Meu Primeiro Endpoint -->
<div class="section">
  <h2>3. Meu Primeiro Endpoint</h2>
  <button onclick="chamarMeuPrimeiroEndpoint()">Chamar Meu Endpoint</button>
  <div id="resultado-endpoint"></div>
</div>
```

**Onde adicionar:** Entre a seção de Soma e o fechamento `</div>` do container principal.

### Passo 4: Adicionar a Função JavaScript

Agora você precisa adicionar a função que faz a requisição. Encontre a seção `<script>` no final do arquivo (onde estão as funções `carregarFrutas()` e `calcularSoma()`).

Adicione esta função **depois** da função `calcularSoma()`:

```javascript
// Função para chamar o endpoint /meuprimeiroendpoint
async function chamarMeuPrimeiroEndpoint() {
  // Passo 1: Encontrar o elemento HTML onde vamos mostrar o resultado
  const resultadoDiv = document.getElementById('resultado-endpoint');
  
  // Passo 2: Mostrar mensagem de "carregando" enquanto busca os dados
  resultadoDiv.innerHTML = '<p class="loading">Carregando...</p>';

  // Passo 3: Tentar fazer a requisição para a API
  try {
    // fetch() = função que faz requisição HTTP (busca dados na internet)
    // É como fazer um pedido ao garçom do restaurante
    // await = espera a resposta chegar antes de continuar
    const response = await fetch(`${API_URL_PUBLIC}/meuprimeiroendpoint`);
    
    // response.json() = converte a resposta em formato JSON para objeto JavaScript
    // await = espera a conversão terminar
    const data = await response.json();
    // Agora 'data' contém: { sucesso: true, mensagem: "...", autor: "...", data: "..." }

    // Passo 4: Verificar se deu certo
    if (data.sucesso) {
      // Se deu certo, vamos criar o HTML para mostrar a mensagem
      resultadoDiv.innerHTML = `
        <h3>Resposta do Backend:</h3>
        <p><strong>${data.mensagem}</strong></p>
        <p>Autor: ${data.autor}</p>
        <p>Data: ${data.data}</p>
      `;
    } else {
      // Se não deu certo, mostra mensagem de erro
      resultadoDiv.innerHTML = '<p class="erro">Erro ao chamar o endpoint</p>';
    }
  } catch (error) {
    // catch = se der algum erro (ex: servidor não está rodando)
    // Mostra mensagem de erro com detalhes
    resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}. Verifique se o backend está rodando!</p>`;
  }
}
```

### Passo 5: Salvar e Testar

1. **Salve o arquivo** (`Ctrl + S`)
2. **Recarregue a página** no navegador (`F5` ou `Ctrl + R`)
3. **Clique no botão** "Chamar Meu Endpoint"
4. **Veja a mensagem** aparecer na tela!

---

## 📖 Entendendo o Código que Você Adicionou

### Parte HTML:

```html
<div class="section">
  <h2>3. Meu Primeiro Endpoint</h2>
  <button onclick="chamarMeuPrimeiroEndpoint()">Chamar Meu Endpoint</button>
  <div id="resultado-endpoint"></div>
</div>
```

- `<div class="section">` = cria uma seção (igual às outras)
- `<h2>` = título da seção
- `<button onclick="...">` = botão que chama a função quando clicado
- `<div id="resultado-endpoint">` = lugar onde o resultado será exibido

### Parte JavaScript:

```javascript
async function chamarMeuPrimeiroEndpoint() {
```
- `async function` = função assíncrona (pode demorar para executar)
- `chamarMeuPrimeiroEndpoint` = nome da função

```javascript
  const resultadoDiv = document.getElementById('resultado-endpoint');
```
- `document.getElementById()` = encontra elemento HTML pelo ID
- `'resultado-endpoint'` = ID do elemento onde vamos mostrar o resultado

```javascript
  resultadoDiv.innerHTML = '<p class="loading">Carregando...</p>';
```
- `innerHTML` = conteúdo HTML dentro do elemento
- Mostra "Carregando..." enquanto busca os dados

```javascript
  const response = await fetch(`${API_URL_PUBLIC}/meuprimeiroendpoint`);
```
- `fetch()` = faz requisição HTTP para a API
- `${API_URL_PUBLIC}` = URL do backend (http://localhost:3000)
- `/meuprimeiroendpoint` = caminho do endpoint
- `await` = espera a resposta chegar

```javascript
  const data = await response.json();
```
- `response.json()` = converte resposta JSON para objeto JavaScript
- `data` agora contém: `{ sucesso: true, mensagem: "...", ... }`

```javascript
  if (data.sucesso) {
    resultadoDiv.innerHTML = `...`;
  }
```
- Verifica se `sucesso` é `true`
- Se sim, cria HTML com os dados e mostra na tela
- Template string (backticks ``) permite usar variáveis: `${data.mensagem}`

```javascript
  } catch (error) {
    resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}...</p>`;
  }
```
- `catch` = se der erro, executa este código
- Mostra mensagem de erro na tela

---

## 🎨 Personalizando a Exibição

Você pode personalizar como a mensagem aparece! Modifique a parte que cria o HTML:

### Opção 1: Mais Simples
```javascript
resultadoDiv.innerHTML = `
  <p><strong>${data.mensagem}</strong></p>
`;
```

### Opção 2: Mais Detalhado
```javascript
resultadoDiv.innerHTML = `
  <h3>🎉 Resposta do Backend:</h3>
  <div class="fruta-item">
    <p><strong>Mensagem:</strong> ${data.mensagem}</p>
    <p><strong>Autor:</strong> ${data.autor}</p>
    <p><strong>Data:</strong> ${data.data}</p>
  </div>
`;
```

### Opção 3: Com Emoji
```javascript
resultadoDiv.innerHTML = `
  <h3>✅ Sucesso!</h3>
  <p>${data.mensagem}</p>
  <p>👤 Autor: ${data.autor}</p>
  <p>📅 Data: ${data.data}</p>
`;
```

---

## 🔍 Verificando se Funcionou

### Checklist:

- [ ] Adicionei a nova seção HTML (div com class="section")
- [ ] Adicionei o botão com onclick="chamarMeuPrimeiroEndpoint()"
- [ ] Adicionei a div com id="resultado-endpoint"
- [ ] Adicionei a função JavaScript chamarMeuPrimeiroEndpoint()
- [ ] Salvei o arquivo
- [ ] Recarreguei a página no navegador
- [ ] Cliquei no botão e vi a mensagem aparecer
- [ ] A mensagem mostra os dados do backend corretamente

### Se não funcionou:

1. **Verifique se salvou o arquivo** (`Ctrl + S`)
2. **Verifique se recarregou a página** no navegador (`F5`)
3. **Verifique se o backend está rodando:**
   - Abra: http://localhost:3000/meuprimeiroendpoint
   - Deve retornar JSON
4. **Abra o Console do navegador** (`F12` → aba Console):
   - Veja se há erros em vermelho
   - Erros mostram o que está errado!
5. **Verifique se digitou tudo corretamente:**
   - Nome da função: `chamarMeuPrimeiroEndpoint`
   - ID do elemento: `resultado-endpoint`
   - URL do endpoint: `/meuprimeiroendpoint`

---

## 📝 Estrutura Completa do Código

### HTML (adicionar no body):

```html
<!-- Seção: Meu Primeiro Endpoint -->
<div class="section">
  <h2>3. Meu Primeiro Endpoint</h2>
  <button onclick="chamarMeuPrimeiroEndpoint()">Chamar Meu Endpoint</button>
  <div id="resultado-endpoint"></div>
</div>
```

### JavaScript (adicionar no script):

```javascript
// Função para chamar o endpoint /meuprimeiroendpoint
async function chamarMeuPrimeiroEndpoint() {
  const resultadoDiv = document.getElementById('resultado-endpoint');
  resultadoDiv.innerHTML = '<p class="loading">Carregando...</p>';

  try {
    const response = await fetch(`${API_URL_PUBLIC}/meuprimeiroendpoint`);
    const data = await response.json();

    if (data.sucesso) {
      resultadoDiv.innerHTML = `
        <h3>Resposta do Backend:</h3>
        <p><strong>${data.mensagem}</strong></p>
        <p>Autor: ${data.autor}</p>
        <p>Data: ${data.data}</p>
      `;
    } else {
      resultadoDiv.innerHTML = '<p class="erro">Erro ao chamar o endpoint</p>';
    }
  } catch (error) {
    resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}. Verifique se o backend está rodando!</p>`;
  }
}
```

---

## 🎓 Conceitos que Você Aprendeu

### 1. **Frontend e Backend se Comunicam**
- Frontend faz requisições HTTP
- Backend responde com dados JSON
- Frontend exibe os dados na tela

### 2. **Função Assíncrona (async/await)**
- `async function` = função que pode demorar
- `await` = espera a operação terminar
- Necessário para requisições HTTP

### 3. **fetch() API**
- Função JavaScript para fazer requisições HTTP
- Retorna uma Promise (promessa)
- Precisa usar `await` para esperar a resposta

### 4. **DOM (Document Object Model)**
- `document.getElementById()` = encontra elemento HTML
- `innerHTML` = conteúdo HTML do elemento
- Permite modificar a página dinamicamente

### 5. **Template Strings**
- Usa backticks (``) ao invés de aspas
- Permite usar variáveis: `${variavel}`
- Permite quebrar linhas no código

### 6. **Try/Catch**
- `try` = tenta executar código
- `catch` = se der erro, executa este código
- Importante para tratar erros

---

## 🚀 Desafios Extras (Opcional)

### Desafio 1: Adicionar Estilo Personalizado
Crie um estilo CSS especial para a seção do seu endpoint:
- Cor de fundo diferente
- Borda especial
- Animação ao carregar

### Desafio 2: Mostrar Hora Também
Modifique o código para mostrar também a hora (não só a data):
- Adicione `hora` no backend
- Mostre a hora no frontend

### Desafio 3: Botão de Limpar
Adicione um botão "Limpar" que:
- Limpa o resultado quando clicado
- Volta a div para vazia

---

## 💡 Dicas Importantes

### ✅ Boas Práticas:

1. **Sempre mostre feedback visual:**
   - "Carregando..." enquanto busca
   - Mensagem de erro se der problema

2. **Use try/catch:**
   - Sempre trate erros
   - Mostre mensagens claras ao usuário

3. **Organize o código:**
   - Funções com nomes descritivos
   - Comentários explicando o que faz

### ⚠️ Erros Comuns:

1. **Esquecer de recarregar a página:**
   - Sempre recarregue após salvar (`F5`)

2. **Erro de digitação:**
   - Nome da função deve ser exato
   - ID do elemento deve ser exato

3. **Backend não está rodando:**
   - Verifique se `docker-compose up` está ativo
   - Teste a URL diretamente no navegador

---

## 📋 Solução Completa (Referência)

### HTML (adicionar após a seção de Soma):

```html
<!-- Seção: Meu Primeiro Endpoint -->
<div class="section">
  <h2>3. Meu Primeiro Endpoint</h2>
  <button onclick="chamarMeuPrimeiroEndpoint()">Chamar Meu Endpoint</button>
  <div id="resultado-endpoint"></div>
</div>
```

### JavaScript (adicionar após a função calcularSoma):

```javascript
// Função para chamar o endpoint /meuprimeiroendpoint
async function chamarMeuPrimeiroEndpoint() {
  const resultadoDiv = document.getElementById('resultado-endpoint');
  resultadoDiv.innerHTML = '<p class="loading">Carregando...</p>';

  try {
    const response = await fetch(`${API_URL_PUBLIC}/meuprimeiroendpoint`);
    const data = await response.json();

    if (data.sucesso) {
      resultadoDiv.innerHTML = `
        <h3>Resposta do Backend:</h3>
        <p><strong>${data.mensagem}</strong></p>
        <p>Autor: ${data.autor}</p>
        <p>Data: ${data.data}</p>
      `;
    } else {
      resultadoDiv.innerHTML = '<p class="erro">Erro ao chamar o endpoint</p>';
    }
  } catch (error) {
    resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}. Verifique se o backend está rodando!</p>`;
  }
}
```

### Onde adicionar:

- **HTML:** Após a seção de Soma, antes do fechamento `</div>` do container
- **JavaScript:** Após a função `calcularSoma()`, antes do fechamento `</script>`

---

## 🎉 Parabéns!

Você completou o Exercício 4! Agora você sabe:
- ✅ Como adicionar uma nova seção no HTML
- ✅ Como criar uma função JavaScript que chama a API
- ✅ Como usar `fetch()` para fazer requisições HTTP
- ✅ Como exibir dados do backend no frontend
- ✅ Como tratar erros com try/catch
- ✅ Como atualizar a página dinamicamente

**Agora você conectou o frontend com o backend!** 🚀

---

**Bons estudos! 📖✨**

