// ============================================
// SERVIDOR BACKEND - API REST SIMPLES
// ============================================
// Este arquivo cria um servidor web que responde a requisições HTTP
// É como um garçom que recebe pedidos e traz as informações pedidas

// Importar as bibliotecas necessárias
// require() é como "importar" ferramentas prontas para usar
const express = require('express');  // Express: framework para criar APIs
const cors = require('cors');        // CORS: permite que o frontend acesse esta API

// Criar uma instância do Express (aplicação web)
// É como criar um restaurante que vai receber clientes
const app = express();

// Definir a porta onde o servidor vai "escutar" requisições
// Porta 3000 = número da "porta" onde o servidor fica esperando
const PORT = 3000;

// ============================================
// MIDDLEWARES (Configurações Gerais)
// ============================================
// Middlewares são "filtros" que processam todas as requisições antes de chegar nas rotas

// app.use() = aplicar uma configuração para TODAS as requisições

// CORS: permite que o frontend (que está em outro lugar) acesse esta API
// Sem isso, o navegador bloqueia as requisições por segurança
app.use(cors());

// express.json(): permite que o servidor entenda dados em formato JSON
// JSON é um formato de texto usado para enviar dados estruturados
app.use(express.json());

// ============================================
// DADOS (Base de Dados Simples)
// ============================================
// Por enquanto, vamos usar um array (lista) simples para guardar dados
// Em um projeto real, isso viria de um banco de dados

// Array de frutas: uma lista de objetos
// Cada objeto tem: id (número único), nome (texto), cor (texto)
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 2, nome: 'Banana', cor: 'Amarela' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Uva', cor: 'Roxa' },
  { id: 5, nome: 'Morango', cor: 'Vermelha' },
  { id: 6, nome: 'Limão', cor: 'Veeeeeeeeeeeeeerde' },
];

// ============================================
// ROTAS (Endpoints da API)
// ============================================
// Rotas são os "caminhos" que o cliente pode acessar
// Cada rota tem: método HTTP (GET, POST, etc) + caminho (URL) + função que executa

// ------------------------------------------------------------
// ROTA 1: GET /pega-frutas
// ------------------------------------------------------------
// GET = método HTTP para "buscar/ler" dados (não modifica nada)
// Quando alguém acessar http://localhost:3000/pega-frutas
// Esta função será executada

app.get('/pega-frutas', (req, res) => {
  // req = request (requisição) - dados que o cliente enviou
  // res = response (resposta) - como vamos responder ao cliente

  // res.json() = enviar uma resposta em formato JSON
  // JSON é como um "dicionário" com chave: valor
  res.json({
    sucesso: true,           // Indica que deu tudo certo
    frutas: frutas,
    outraCoisa: 'teste'           // Envia a lista de frutas
  });
  
  // O que acontece:
  // 1. Cliente faz requisição: GET http://localhost:3000/pega-frutas
  // 2. Servidor executa esta função
  // 3. Servidor retorna: { sucesso: true, frutas: [...] }
});

// ------------------------------------------------------------
// ROTA 2: GET /soma
// ------------------------------------------------------------
// Esta rota recebe PARÂMETROS na URL (query parameters)
// Exemplo: /soma?a=5&b=3
//          ^    ^  ^  ^
//          |    |  |  |
//          |    |  |  valor de b
//          |    |  nome do segundo parâmetro
//          |    valor de a
//          nome do primeiro parâmetro

app.get('/soma', (req, res) => {
  // req.query = objeto com todos os parâmetros da URL
  // Se a URL for /soma?a=5&b=3
  // req.query = { a: '5', b: '3' }
  
  // parseFloat() = converter texto para número decimal
  // '5' (texto) vira 5 (número)
  const a = parseFloat(req.query.a);  // Pega o parâmetro 'a' da URL
  const b = parseFloat(req.query.b);  // Pega o parâmetro 'b' da URL

  // Validação: verificar se os números são válidos
  // isNaN() = "is Not a Number" - verifica se NÃO é um número
  if (isNaN(a) || isNaN(b)) {
    // Se algum dos valores não for um número válido:
    // return = para a execução aqui e retorna a resposta
    // status(400) = código HTTP 400 = "Bad Request" (requisição inválida)
    return res.status(400).json({
      sucesso: false,
      erro: 'Parâmetros inválidos. Use: /soma?a=5&b=3'
    });
  }

  // Se chegou aqui, os números são válidos
  // Fazer a soma
  const resultado = a + b;

    // Retornar o resultado em formato JSON
    res.json({
      sucesso: true,
      a: a,                    // Primeiro número
      b: b,                    // Segundo número
      resultado: resultado     // Resultado da soma
    });
  });

// ------------------------------------------------------------
// ROTA 3: GET / (raiz)
// ------------------------------------------------------------
// Esta é a rota "padrão" quando alguém acessa apenas http://localhost:3000
// Útil para testar se a API está funcionando

app.get('/', (req, res) => {
  // Retorna informações sobre a API
  res.json({
    mensagem: 'API funcionando!',
    endpoints: [  // Lista de rotas disponíveis
      'GET /pega-frutas - Retorna lista de frutas',
      'GET /soma?a=X&b=Y - Soma dois números'
    ]
  });
});
app.get('/asd', (req, res) => {
  // Retorna informações sobre a API
  res.json({
    mensagem: 'EndPoint funcionando novo!',
   
  });
});

// ============================================
// INICIAR O SERVIDOR
// ============================================
// app.listen() = "ligar" o servidor e começar a escutar requisições
// É como abrir o restaurante para receber clientes

app.listen(PORT, '0.0.0.0', () => {
  // PORT = porta 3000
  // '0.0.0.0' = aceitar conexões de qualquer lugar (necessário para Docker)
  // () => {} = função que executa quando o servidor inicia
  
  // console.log() = imprimir mensagem no terminal
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  
  // A partir de agora, o servidor está "vivo" e esperando requisições!
});

// ============================================
// RESUMO DO QUE ACONTECE:
// ============================================
// 1. Servidor inicia na porta 3000
// 2. Cliente (frontend) faz requisição: GET /pega-frutas
// 3. Servidor recebe a requisição
// 4. Servidor executa a função da rota correspondente
// 5. Servidor retorna resposta em JSON
// 6. Cliente recebe e exibe os dados
