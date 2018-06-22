'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
var requestCounter = 0;

// App
const app = express();
app.get('/', (req, res) => {
  requestCounter++;
  console.log(`Current Counter: ${requestCounter}`);
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);