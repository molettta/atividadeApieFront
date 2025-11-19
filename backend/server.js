const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dados de exemplo - frutas
const frutas = [
  { id: 1, nome: 'Maçã', cor: 'Vermelha' },
  { id: 2, nome: 'Banana', cor: 'Amarela' },
  { id: 3, nome: 'Laranja', cor: 'Laranja' },
  { id: 4, nome: 'Uva', cor: 'Roxa' },
  { id: 5, nome: 'Morango', cor: 'Vermelha' },
];

// Endpoint: GET /pega-frutas
app.get('/pega-frutas', (req, res) => {
  res.json({
    sucesso: true,
    frutas: frutas
  });
});

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

// Endpoint de teste
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API funcionando!',
    endpoints: [
      'GET /pega-frutas - Retorna lista de frutas',
      'GET /soma?a=X&b=Y - Soma dois números'
    ]
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

