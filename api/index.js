const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const db = require('./db');
db.init();
app.use(bodyParser.json());
app.use(express.static('images'));
const router = express.Router();
require('./routes')(router);
app.use('/', router);

const server = app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

require('./io')(server);
