const fs      = require('fs');
const path    = require('path');
const winston = require('winston');

const logger = new winston.Logger();

const RAWDIR       = 'raw';
const PROCESSEDDIR = 'processed';
const UPLOADEDDIR  = 'uploaded';

module.exports = function (recreate) {
  try {
    if (recreate) {
      if (fs.existsSync(RAWDIR)) {
        console.log(`Deleting ${RAWDIR}`);
        fs.rmdirSync(RAWDIR);
      }

      if (fs.existsSync(PROCESSEDDIR)) {
        console.log(`Deleting ${PROCESSEDDIR}`);
        fs.rmdirSync(PROCESSEDDIR);
      }

      if (fs.existsSync(UPLOADEDDIR)) {
        console.log(`Deleting ${UPLOADEDDIR}`);
        fs.rmdirSync(UPLOADEDDIR);
      }
    }

    if (!fs.existsSync(RAWDIR)) {
      console.log(`Created ${RAWDIR}`)
      fs.mkdirSync(RAWDIR);
    }

    if (!fs.existsSync(PROCESSEDDIR)) {
      console.log(`Created ${PROCESSEDDIR}`)
      fs.mkdirSync(PROCESSEDDIR);
    }

    if (!fs.existsSync(UPLOADEDDIR)) {
      console.log(`Created ${UPLOADEDDIR}`)
      fs.mkdirSync(UPLOADEDDIR);
    }
  }
  catch (e) {
    console.log(e);
    throw new Error(`Failed to initialize directory: ${e}`);
  }
};