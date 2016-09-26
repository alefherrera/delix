const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('./io')(server);
const fs = require('fs');
const db = require('./db');
db.init();
app.use(bodyParser.json());
app.use(express.static('images'));
const router = express.Router();
require('./routes')(router, io);
app.use('/', router);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
