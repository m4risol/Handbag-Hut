import express from 'express';
// import cors from 'cors';
import data from './data.js';

const app = express();

// app.use(cors());

// get all bags
app.get('/api/bags', (req, res) => {
  res.send(data);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
