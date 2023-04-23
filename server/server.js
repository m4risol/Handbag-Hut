import express from 'express';
import data from './data.js';

const app = express();

// get all bags
app.get('/api/bags', (req, res) => {
  res.send(data);
});

//get bag by id
app.get('/api/bags/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = data.find((p) => p.id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
