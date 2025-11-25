# 🍎 Exercício 2: Adicionando e Removendo Frutas

## 📚 O que você vai aprender?

Neste exercício, você vai aprender a **modificar dados diretamente no backend**! Você vai:
- ✅ **Adicionar** novas frutas na lista
- ✅ **Remover** frutas da lista
- ✅ Entender como os dados são armazenados em formato JSON

Até agora você só **leu** dados (usando GET). Agora vai **editar** os dados diretamente no código!

---

## 🤔 O que é JSON?

**JSON** (JavaScript Object Notation) é um formato de texto usado para armazenar dados estruturados. É como um "dicionário" com chaves e valores.

### Exemplo de JSON:

```json
{
  "id": 1,
  "nome": "Maçã",
  "cor": "Vermelha"
}
```

### Array de Objetos JSON:

```json
[
  { "id": 1, "nome": "Maçã", "cor": "Vermelha" },
  { "id": 2, "nome": "Banana", "cor": "Amarela" }
]
```

---

## 📍 Onde Editar os Dados?

Os dados das frutas estão no arquivo **`backend/server.js`**!

### Localização:

Abra o arquivo `backend/server.js` e encontre o array `frutas`:

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
- `nome`: nome da fruta (texto entre aspas)
- `cor`: cor da fruta (texto entre aspas)

---

## 🎯 Parte 1: Adicionar Frutas

Vamos adicionar novas frutas na lista!

### Passo 1: Entender a Estrutura

Cada fruta é um objeto com 3 propriedades:
```javascript
{ id: 6, nome: 'Abacaxi', cor: 'Amarela' }
```

### Passo 2: Adicionar uma Nova Fruta

1. **Abra** o arquivo `backend/server.js`
2. **Encontre** o array `frutas`
3. **Adicione** uma nova fruta no final da lista (antes do `];`)

**Exemplo:**
```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 2, nome: 'Banana', cor: 'Amarela' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Uva', cor: 'Roxa' },
  { id: 5, nome: 'Morango', cor: 'Vermelha' },
  { id: 6, nome: 'Abacaxi', cor: 'Amarela' },  // ← NOVA FRUTA ADICIONADA!
];
```

### Passo 3: Regras Importantes

⚠️ **ATENÇÃO:**
- Use **vírgula** (`,`) após cada fruta (exceto a última)
- Use **aspas simples** (`'`) ou **aspas duplas** (`"`) para textos
- O **ID** deve ser um número único (não repita IDs!)
- Se a última fruta tinha vírgula, adicione vírgula na nova também

### Passo 4: Verificar se Funcionou

1. **Salve** o arquivo (`Ctrl + S` ou `Cmd + S`)
2. Se estiver usando **nodemon**, o servidor reinicia automaticamente
3. **Teste** o endpoint `/pega-frutas` no Postman ou no navegador
4. **Verifique** se a nova fruta apareceu na lista!

---

## 🗑️ Parte 2: Remover Frutas

Agora vamos remover frutas da lista!

### Passo 1: Encontrar a Fruta

1. **Abra** o arquivo `backend/server.js`
2. **Encontre** o array `frutas`
3. **Localize** a fruta que você quer remover

### Passo 2: Remover a Fruta

**Exemplo - Antes:**
```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 2, nome: 'Banana', cor: 'Amarela' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Uva', cor: 'Roxa' },
  { id: 5, nome: 'Morango', cor: 'Vermelha' },
];
```

**Exemplo - Depois (removendo a Banana):**
```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Uva', cor: 'Roxa' },
  { id: 5, nome: 'Morango', cor: 'Vermelha' },
];
```

### Passo 3: Cuidados ao Remover

⚠️ **ATENÇÃO:**
- Remova a **linha inteira** da fruta (incluindo a vírgula)
- Se você removeu uma fruta do meio, ajuste as vírgulas:
  - A última fruta **não** deve ter vírgula
  - As outras frutas **devem** ter vírgula

### Passo 4: Verificar se Funcionou

1. **Salve** o arquivo
2. **Teste** o endpoint `/pega-frutas`
3. **Verifique** se a fruta foi removida da lista!

---

## 🎯 Parte 3: Editar Frutas Existentes

Você também pode **modificar** frutas que já existem!

### Passo 1: Encontrar a Fruta

Localize a fruta que você quer modificar no array.

### Passo 2: Modificar os Valores

**Exemplo - Modificando a cor da Maçã:**

**Antes:**
```javascript
{ id: 1, nome: 'Maçã', cor: 'Vermelha' },
```

**Depois:**
```javascript
{ id: 1, nome: 'Maçã', cor: 'Verde' },
```

Você pode modificar:
- O **nome** da fruta
- A **cor** da fruta
- ⚠️ **NÃO modifique o ID** (ele deve permanecer único)

---

## 📝 Exemplo Completo

Aqui está um exemplo de como o array pode ficar após suas edições:

```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 2, nome: 'Banana', cor: 'Amarela' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Uva', cor: 'Roxa' },
  { id: 5, nome: 'Morango', cor: 'Vermelha' },
  { id: 6, nome: 'Abacaxi', cor: 'Amarela' },      // ← Adicionada
  { id: 7, nome: 'Manga', cor: 'Laranja' },        // ← Adicionada
  { id: 8, nome: 'Melancia', cor: 'Verde' },        // ← Adicionada
];
```

---

## 🎓 Conceitos que Você Aprendeu

### 1. **Estrutura de Dados JSON**
- Objetos têm propriedades: `{ chave: valor }`
- Arrays são listas: `[ item1, item2, item3 ]`
- Arrays de objetos: `[{ ... }, { ... }]`

### 2. **Edição Manual de Dados**
- Você pode editar dados diretamente no código
- Mudanças são salvas no arquivo
- O servidor precisa reiniciar (ou usar nodemon)

### 3. **Sintaxe JavaScript**
- Vírgulas separam itens no array
- Aspas envolvem textos (strings)
- Números não precisam de aspas

---

## 🔍 Verificando se Funcionou

### Checklist:

- [ ] Abri o arquivo `backend/server.js`
- [ ] Encontrei o array `frutas`
- [ ] Adicionei pelo menos 2 novas frutas
- [ ] Removi pelo menos 1 fruta
- [ ] Verifiquei que as vírgulas estão corretas
- [ ] Salvei o arquivo
- [ ] Testei o endpoint `/pega-frutas` no Postman
- [ ] Verifiquei que as mudanças apareceram na resposta

---

## 🚀 Desafios Extras (Opcional)

### Desafio 1: Adicionar 5 Frutas Diferentes
Adicione 5 frutas novas na lista, cada uma com ID único e cores diferentes!

### Desafio 2: Organizar por Cor
Reorganize as frutas agrupando-as por cor (todas as vermelhas juntas, todas as amarelas juntas, etc.)

### Desafio 3: Criar uma Lista Temática
Crie uma lista apenas com frutas de uma cor específica (ex: só frutas vermelhas)

---

## 💡 Dicas Importantes

### ✅ Boas Práticas:

1. **Sempre use IDs únicos:**
   - Não repita o mesmo ID
   - Use números sequenciais (1, 2, 3, 4...)

2. **Mantenha a formatação:**
   - Use indentação (espaços) para facilitar leitura
   - Mantenha vírgulas consistentes

3. **Teste sempre:**
   - Após cada mudança, teste o endpoint `/pega-frutas`
   - Verifique se não quebrou nada

### ⚠️ Erros Comuns:

1. **Esquecer vírgulas:**
   - Cada item do array precisa de vírgula (exceto o último)
   - Erro: `{ id: 1, nome: 'Maçã' } { id: 2, nome: 'Banana' }`
   - Correto: `{ id: 1, nome: 'Maçã' }, { id: 2, nome: 'Banana' }`

2. **Esquecer aspas em textos:**
   - Nomes e cores devem estar entre aspas
   - Erro: `{ id: 1, nome: Maçã, cor: Vermelha }`
   - Correto: `{ id: 1, nome: 'Maçã', cor: 'Vermelha' }`

3. **IDs duplicados:**
   - Cada fruta deve ter um ID único
   - Erro: duas frutas com `id: 1`
   - Correto: IDs diferentes (1, 2, 3, 4...)

4. **Não salvar o arquivo:**
   - Sempre salve após fazer mudanças!
   - Use `Ctrl + S` (Windows) ou `Cmd + S` (Mac)

---

## 📋 Exemplo de Edição Passo a Passo

### Situação Inicial:
```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 2, nome: 'Banana', cor: 'Amarela' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
];
```

### Passo 1: Adicionar Abacaxi
```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 2, nome: 'Banana', cor: 'Amarela' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Abacaxi', cor: 'Amarela' },  // ← Adicionada
];
```

### Passo 2: Remover Banana
```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Abacaxi', cor: 'Amarela' },
];
```

### Passo 3: Modificar cor da Maçã
```javascript
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Verde' },  // ← Cor modificada
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Abacaxi', cor: 'Amarela' },
];
```

---

## 🎉 Parabéns!

Você completou o Exercício 2! Agora você sabe:
- ✅ Como editar dados JSON diretamente no código
- ✅ Como adicionar novos itens em um array
- ✅ Como remover itens de um array
- ✅ Como modificar itens existentes
- ✅ Como manter a sintaxe correta (vírgulas, aspas, etc.)

**Continue praticando!** 🚀

---

**Bons estudos! 📖✨**
