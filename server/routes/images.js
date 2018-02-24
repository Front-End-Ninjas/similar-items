const express = require('express');
const fs = require('fs');
const path = require('path');

const image = express.Router();

image.get('/img/:id', (req, res) => {
  const imgPath = path.join(__dirname, '..', '..', 'dummyData', `${req.url}.jpg`);

  fs.stat(imgPath, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendFile(imgPath, (bad) => {
        if (bad) {
          res.status(500).send(err);
        }
      });
    }
  });
});

module.exports = image;
