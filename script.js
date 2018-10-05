const express = require('express');
const jsonfile = require('jsonfile');
const FILE = 'data.json';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Have a good weekend!");
});

app.listen(3000, () => console.log('Listening on port 3000'));