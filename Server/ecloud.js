const path = require('path');
const express = require('express');
const router = express.Router();
const fs = require('fs');

var Mongo = require('./javascript/mongo');
var User = require('./javascript/users');

const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
router.use(express.static(DIST_DIR)); // NEW

var m = new Mongo('mongodb://localhost:27017/', 'ECloud');

router.get('/api', async (req, res) => {
  var tempData = await m.pullCollection('Files');
  //console.log(tempData);
  res.send(tempData);
});

router.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

router.get('/dashboard', async (req, res) => {
    if(req.session.user != null && await m.isInDB('UserAccount', {id: req.session.user.id, loggedIn: true}) == true){
      //var tempData = await m.pullCollection('Files');
      //console.log(tempData);
      //fs.writeFile("file-data.json", JSON.stringify(tempData), (err) => {if(err) console.log('error', err);});
      res.sendFile(HTML_FILE);
    }else{
        res.redirect('/ecloud/login');
    }
});

router.get('/login', (req, res) => {
  res.sendFile(HTML_FILE);
});

router.post('/login', async (req, res) => {
    var u = new User(m, req.body);
    if(await u.login('UserAccount')){
        var user = await m.getDoc('UserAccount', {email: req.body.email});
        req.session.user = {id: user.id};
        res.redirect('/ecloud/dashboard');
    }else{
        res.redirect('/ecloud/login');
    }
});

router.get('/logout', (req, res) => {
    m.updateItem('UserAccount', {id: req.session.user.id}, {loggedIn: false});
    res.clearCookie('user');
    res.redirect('/ecloud/');
});

router.get('/register', (req, res) => {
  res.sendFile(HTML_FILE);
});

router.post('/register', (req, res) => {
    var u = new User(m, req.body);
    u.newUser('UserAccount');
    res.sendFile(HTML_FILE);
});

router.get('/register/:hash', async (req, res) => {
    var hash = req.params.hash;
    if(await m.isInDB('UserAccount', {hash: hash, verifyed: false}) == true){
        m.updateItem('UserAccount', {hash: hash}, {verifyed: true});
        m.deleteItem('UserAccount', {hash: hash}, {hash: hash});   
        m.deleteDoc('UsedHashes', {hash: hash});
    }else{
        console.log('The hash does not exist or has expired');
    }
    res.redirect('/ecloud/');
});

router.get('/test', (req, res) => {
  res.send({test: 'ecloud'});
});

module.exports = router;
