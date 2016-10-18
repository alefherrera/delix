const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const db = require('./db');
const cors = require('cors');
const opn = require('opn');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

db.init();
// app.use(morgan());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('images'));
const router = express.Router();
const io = require('./io')(server);
require('./routes')(router, io);
app.use('/', router);

app.route('/*.js')
    .get(function(req, res) {
      const content = fs.readFileSync(path.join(__dirname, 'asset/bundle.js'));
      res.set('Content-Type', 'text/javascript');
      res.send(content);
    });

app.route('/*')
    .get(function(req, res) {
      const content = fs.readFileSync(path.join(__dirname, 'asset/index.html'));
      res.set('Content-Type', 'text/html');
      res.send(content);
    });


const url = 'http://localhost:3001';

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
  // opn(url);
});
