const path = require('path');
const express = require('express');
const router = express.Router();

const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
router.use(express.static(DIST_DIR)); // NEW

router.get('/test', (req, res) => {
    res.send({test: 'home'});
});

router.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

router.get('/button', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
  });

router.get('/welcome', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

module.exports = router;