const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the stock market Analysis API!');
});

//Endpooint 1
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;
  let result = (marketPrice - boughtAt) * quantity;
  res.send(result.toString());
});

//Endpoints 2
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = stock1 + stock2 + stock3 + stock4;
  res.send(result.toString());
});

//Endpoint 3
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let result = (returns / boughtAt) * 100;
  res.send(result.toString());
});

//Endpoint 4
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let result = stock1 + stock2 + stock3 + stock4;

  res.send(result.toString());
});

//Endpoint 5

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  if (returnPercentage > 0) {
    result = 'Profit';
  } else {
    result = 'Loss';
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
