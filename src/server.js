const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const accounts = [
  {
    id: 1,
    symbol: '$',
    ticker: 'USD',
    amount: 1034.23,
  },
  {
    id: 2,
    symbol: '£',
    ticker: 'GBP',
    amount: 420.98,
  },
  {
    id: 3,
    symbol: '€',
    ticker: 'EUR',
    amount: 276.01,
  },
  {
    id: 4,
    symbol: '₽',
    ticker: 'RUB',
    amount: 41089.0,
  },
];

app.get('/accounts', (req, res) => res.json(accounts));

const port = 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
