const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const messageController = require('./controllers/message');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/getMessages', messageController.getMessages);

const server = http.createServer(app);

server.listen(process.env.PORT || 4000);