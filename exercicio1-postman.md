# 🚀 Exercício 1: Conhecendo o Postman

## 📚 O que você vai aprender?

Neste exercício, você vai aprender a usar o **Postman**, uma ferramenta muito importante para testar APIs. Você vai fazer requisições diretamente para o backend, sem precisar do frontend!

---

## 🤔 O que é Postman?

**Postman** é uma ferramenta que permite fazer requisições HTTP para APIs. É como um "navegador especializado" para testar APIs.

### Por que usar Postman?

- ✅ Testa APIs sem precisar criar uma interface visual
- ✅ Vê exatamente o que a API retorna
- ✅ Fácil de usar e entender
- ✅ Muito usado no mercado de trabalho

### Postman vs Navegador

| Navegador | Postman |
|----------|---------|
| Mostra páginas HTML bonitas | Mostra dados brutos (JSON) |
| Usado para navegar na internet | Usado para testar APIs |
| Precisa de frontend | Testa backend diretamente |

**Resumo:** O Postman faz o papel do navegador, mas mostra os dados de forma mais técnica e direta!

---

## 📥 Passo 1: Instalar o Postman Desktop

⚠️ **IMPORTANTE:** Use o Postman Desktop (aplicativo), não a versão web!

### Por quê?
- A versão web tem limitações
- A versão desktop é mais completa e estável
- É a versão usada profissionalmente

### Como instalar:

1. **Acesse o site oficial:**
   - Vá para: https://www.postman.com/downloads/
   - Ou pesquise "Postman download" no Google

2. **Baixe a versão Desktop:**
   - Clique em "Download" ou "Download the Desktop App"
   - Escolha a versão para Windows (se estiver no Windows)

3. **Instale o aplicativo:**
   - Execute o arquivo baixado
   - Siga as instruções de instalação
   - Abra o Postman após a instalação

4. **Criar conta (opcional mas recomendado):**
   - Você pode criar uma conta gratuita
   - Ou clicar em "Skip" para usar sem conta (com limitações)

---

## 🎯 Passo 2: Verificar se o Backend está Rodando

Antes de usar o Postman, você precisa ter o backend funcionando!

### Como verificar:

1. **Abra o terminal** na pasta do projeto:
   ```bash
   cd atividadeApieFront
   ```

2. **Inicie os containers:**
   ```bash
   docker-compose up
   ```

3. **Verifique se o backend está rodando:**
   - Você deve ver uma mensagem: `🚀 Servidor rodando em http://localhost:3000`
   - Se não aparecer, verifique se o Docker Desktop está rodando!

4. **Teste no navegador (opcional):**
   - Abra: http://localhost:3000
   - Você deve ver uma mensagem JSON: `{"mensagem":"API funcionando!",...}`

✅ **Se funcionou no navegador, está pronto para o Postman!**

---

## 🧪 Passo 3: Testar o Endpoint `/pega-frutas`

Vamos fazer nossa primeira requisição no Postman!

### 3.1. Criar uma Nova Requisição

1. **Abra o Postman Desktop**

2. **Clique em "New"** (botão no canto superior esquerdo)

3. **Selecione "HTTP Request"** (ou "Requisição HTTP")

4. **Você verá uma tela com:**
   - Um campo para o método HTTP (GET, POST, etc.)
   - Um campo para a URL
   - Botão "Send" (Enviar)

### 3.2. Configurar a Requisição

1. **Método HTTP:**
   - No dropdown, selecione **GET** (já deve estar selecionado por padrão)
   - GET = método para "buscar" dados (não modifica nada)

2. **URL:**
   - Digite: `http://localhost:3000/pega-frutas`
   - Esta é a URL completa do endpoint
   - `http://localhost:3000` = endereço do servidor
   - `/pega-frutas` = caminho do endpoint

3. **Clique em "Send"** (Enviar)

### 3.3. Ver o Resultado

Abaixo da requisição, você verá a **resposta** da API:

```json
{
  "sucesso": true,
  "frutas": [
    {
      "id": 1,
      "nome": "Maçã",
      "cor": "Vermelha"
    },
    {
      "id": 2,
      "nome": "Banana",
      "cor": "Amarela"
    },
    // ... mais frutas
  ]
}
```

### 📊 O que você está vendo?

- **Status:** Deve aparecer `200 OK` (sucesso!)
- **Body:** Os dados retornados pela API em formato JSON
- **Time:** Quanto tempo levou a requisição

### ✅ Parabéns!

Você acabou de fazer sua primeira requisição HTTP! O Postman fez o papel do navegador e mostrou os dados que o backend retornou.

---

## 🧮 Passo 4: Testar o Endpoint `/soma`

Agora vamos testar um endpoint que recebe **parâmetros**!

### 4.1. Criar Nova Requisição

1. **Clique em "New" novamente** (ou use `Ctrl+N`)

2. **Selecione "HTTP Request"**

### 4.2. Configurar a Requisição

1. **Método HTTP:**
   - Selecione **GET**

2. **URL:**
   - Digite: `http://localhost:3000/soma`
   - **MAS ESPERE!** Este endpoint precisa de parâmetros...

### 4.3. Adicionar Parâmetros (Query Parameters)

O endpoint `/soma` precisa de dois números: `a` e `b`.

**Opção 1: Adicionar na URL diretamente**
- Digite: `http://localhost:3000/soma?a=5&b=3`
- `?` = início dos parâmetros
- `a=5` = primeiro parâmetro (a = 5)
- `&` = separador entre parâmetros
- `b=3` = segundo parâmetro (b = 3)

**Opção 2: Usar a aba Params (mais organizado)**
1. Clique na aba **"Params"** (ao lado de "Headers")
2. Na primeira linha:
   - **Key:** `a`
   - **Value:** `5`
3. Na segunda linha:
   - **Key:** `b`
   - **Value:** `3`
4. O Postman monta a URL automaticamente!

### 4.4. Enviar e Ver Resultado

1. **Clique em "Send"**

2. **Veja a resposta:**
```json
{
  "sucesso": true,
  "a": 5,
  "b": 3,
  "resultado": 8
}
```

### 🎯 Teste com Outros Valores!

Tente diferentes números:
- `a=10` e `b=20` → resultado deve ser `30`
- `a=100` e `b=50` → resultado deve ser `150`
- `a=-5` e `b=3` → resultado deve ser `-2`

### ⚠️ Teste de Erro

Tente enviar sem parâmetros ou com valores inválidos:
- URL: `http://localhost:3000/soma` (sem parâmetros)
- Ou: `http://localhost:3000/soma?a=abc&b=xyz` (números inválidos)

**O que acontece?**
- Status: `400 Bad Request`
- Resposta: `{"sucesso": false, "erro": "Parâmetros inválidos..."}`

Isso mostra que a API está validando os dados corretamente! ✅

---

## 📝 Passo 5: Testar o Endpoint Raiz `/`

Vamos testar o endpoint que lista todos os endpoints disponíveis!

1. **Crie uma nova requisição GET**
2. **URL:** `http://localhost:3000/`
3. **Clique em "Send"**

**Resposta esperada:**
```json
{
  "mensagem": "API funcionando!",
  "endpoints": [
    "GET /pega-frutas - Retorna lista de frutas",
    "GET /soma?a=X&b=Y - Soma dois números"
  ]
}
```

Este endpoint é útil para descobrir quais rotas estão disponíveis na API!

---

## 🎓 Entendendo o que Aconteceu

### Fluxo Completo:

```
1. Você clica "Send" no Postman
   ↓
2. Postman envia requisição HTTP para o backend
   ↓
3. Backend recebe a requisição (server.js processa)
   ↓
4. Backend executa a função da rota correspondente
   ↓
5. Backend retorna resposta em JSON
   ↓
6. Postman recebe e exibe a resposta na tela
```

### O Postman está fazendo o papel do:

- **Navegador:** Fazendo requisições HTTP
- **Frontend:** Enviando pedidos e mostrando respostas
- **Você:** Testando a API sem precisar criar interface visual

---

## 📚 Conceitos Importantes que Você Aprendeu

### 1. **Método HTTP GET**
- Usado para **buscar** informações
- Não modifica dados no servidor
- Parâmetros vão na URL (query parameters)

### 2. **URL (Uniform Resource Locator)**
- Endereço completo de um recurso
- Exemplo: `http://localhost:3000/pega-frutas`
- `http://` = protocolo
- `localhost:3000` = servidor e porta
- `/pega-frutas` = caminho do recurso

### 3. **Query Parameters (Parâmetros de Consulta)**
- Informações adicionais na URL
- Formato: `?chave=valor&chave2=valor2`
- Exemplo: `?a=5&b=3`

### 4. **JSON (JavaScript Object Notation)**
- Formato de dados usado para comunicação
- Estrutura: `{ "chave": "valor" }`
- Fácil de ler e escrever

### 5. **Status HTTP**
- `200 OK` = sucesso
- `400 Bad Request` = erro do cliente (dados inválidos)
- `404 Not Found` = recurso não encontrado
- `500 Internal Server Error` = erro no servidor

---

## ✅ Checklist do Exercício

Complete todos os itens:

- [ ] Instalei o Postman Desktop
- [ ] Verifiquei que o backend está rodando
- [ ] Testei o endpoint `/pega-frutas` e vi a lista de frutas
- [ ] Testei o endpoint `/soma` com parâmetros `a=5&b=3`
- [ ] Testei o endpoint `/soma` com outros valores
- [ ] Testei o endpoint `/soma` sem parâmetros (vi o erro)
- [ ] Testei o endpoint `/` (raiz)
- [ ] Entendi que o Postman faz o papel do navegador/frontend

---

## 🎯 Próximos Passos

Agora que você sabe usar o Postman:

1. **Explore mais:** Tente mudar os valores e ver o que acontece
2. **Leia as respostas:** Entenda o formato JSON retornado
3. **Observe os status codes:** Veja quando aparece 200, 400, etc.
4. **Próximo exercício:** Você vai criar um frontend que faz essas mesmas requisições!

---

## 🐛 Problemas Comuns

### ❌ "Could not get response" ou "Network Error"
**Solução:**
- Verifique se o backend está rodando (`docker-compose up`)
- Verifique se a URL está correta: `http://localhost:3000`
- Verifique se o Docker Desktop está rodando

### ❌ Status 404 (Not Found)
**Solução:**
- Verifique se digitou a URL corretamente
- Exemplo correto: `http://localhost:3000/pega-frutas`
- Exemplo errado: `http://localhost:3000/pega_frutas` (underscore ao invés de hífen)

### ❌ Status 400 (Bad Request) no `/soma`
**Solução:**
- Isso é normal! Significa que você não passou os parâmetros corretos
- Certifique-se de usar: `?a=5&b=3` na URL
- Ou use a aba "Params" do Postman

---

## 💡 Dica Final

**Salve suas requisições!**

No Postman, você pode:
1. Clicar em "Save" após criar uma requisição
2. Criar uma "Collection" (coleção) para organizar
3. Nomear suas requisições (ex: "Pegar Frutas", "Somar Números")

Isso ajuda a organizar e reutilizar suas requisições depois!

---

**Parabéns por completar o Exercício 1! 🎉**

Agora você sabe usar o Postman para testar APIs. Isso é uma habilidade muito importante no desenvolvimento web!

