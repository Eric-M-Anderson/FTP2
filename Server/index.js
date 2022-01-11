const https = require('https');
const fs = require('fs');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
var Home = require('./home.js');
var ECloud = require('./ecloud.js');

const DIST_DIR = path.join(__dirname, '../dist');
app.use(express.static(DIST_DIR));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', Home);
app.use('/ecloud', ECloud);

const options = {
  port: process.env.PORT || 443,
  host: 'localhost',
  key: fs.readFileSync('./Server/security/key.pem'),
  cert: fs.readFileSync('./Server/security/cert.pem')
};

// Create an HTTPS server
const server = https.createServer(options, app, (req, res) => {});

// Server is running
server.listen(options, (req, res) => {
  console.log(`Server running at https://${options.host}:${options.port}/`);
});