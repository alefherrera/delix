const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('./io')(server);
const db = require('./db');
const cors = require('cors');
const opn = require('opn');

db.init();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('images'));
const router = express.Router();
require('./routes')(router, io);
app.use('/', router);

const path = require('path');
app.use(express.static('../client/dist'));

app.route('/*.js')
    .get(function(req, res) {
      res.sendFile(path.resolve('../client/dist/bundle.js'));
    });

app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve('../client/dist/index.html'));
    });


const url = 'http://localhost:3001';

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
  opn(url);
});
