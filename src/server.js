// Capture Server
const express = require('express');
const init    = require('./init');
const winston = require('winston');

const logger = new winston.Logger();

module.exports = (recreate) => {
  // Initialize the directory structure.
  try {
    init(recreate);
  }
  catch (e) {
    console.log('Failed to start HTTP capture server');
    process.exit(1);
  }

  var app = express();

  app.get('/', (req, res) => {
    res.send('Capture Server');
  });

  app.listen(6677, () => {
    console.log('Capture Server listening on port 6677');
  });
};

